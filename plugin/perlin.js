// Ported from Stefan Gustavson's java implementation
// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// Sean McCullough banksean@gmail.com

var SimplexNoise = function(gen) {
	this.rand = gen;
	this.grad3 = [
		[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0], 
		[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1], 
		[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
	]; 
	
	this.simplex = [ 
		[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0], 
		[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0], 
		[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0], 
		[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0], 
		[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0], 
		[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0], 
		[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0], 
		[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]
	]; 
};

SimplexNoise.prototype.setSeed = function(seed) {
	this.p = [];
	this.rand.seed = seed;
	
	for (var i=0; i<256; i++) {
		this.p[i] = Math.floor(this.rand.nextRange(0, 255));
	}

	this.perm = []; 
	for(var i=0; i<512; i++) {
		this.perm[i]=this.p[i & 255];
	}
}

SimplexNoise.prototype.dot = function(g, x, y) {
	return g[0]*x + g[1]*y;
};

SimplexNoise.prototype.noise = function(xin, yin) { 
	var n0, n1, n2; 

	var F2 = 0.5*(Math.sqrt(3.0)-1.0); 
	var s = (xin+yin)*F2; 
	var i = Math.floor(xin+s); 
	var j = Math.floor(yin+s); 
	var G2 = (3.0-Math.sqrt(3.0))/6.0; 
	var t = (i+j)*G2; 
	var X0 = i-t; 
	var Y0 = j-t; 
	var x0 = xin-X0; 
	var y0 = yin-Y0; 

	var i1, j1; 
	if(x0>y0) {i1=1; j1=0;} 
	else {i1=0; j1=1;}      

	var x1 = x0 - i1 + G2; 
	var y1 = y0 - j1 + G2; 
	var x2 = x0 - 1.0 + 2.0 * G2;  
	var y2 = y0 - 1.0 + 2.0 * G2; 

	var ii = i & 255; 
	var jj = j & 255; 
	var gi0 = this.perm[ii+this.perm[jj]] % 12; 
	var gi1 = this.perm[ii+i1+this.perm[jj+j1]] % 12; 
	var gi2 = this.perm[ii+1+this.perm[jj+1]] % 12; 

	var t0 = 0.5 - x0*x0-y0*y0; 
	if(t0<0) n0 = 0.0; 
	else { 
		t0 *= t0; 
		n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);  
	} 
	var t1 = 0.5 - x1*x1-y1*y1; 
	if(t1<0) n1 = 0.0; 
	else { 
		t1 *= t1; 
		n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1); 
	}
	var t2 = 0.5 - x2*x2-y2*y2; 
	if(t2<0) n2 = 0.0; 
	else { 
		t2 *= t2; 
		n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2); 
	} 

	return 70.0 * (n0 + n1 + n2); 
};

// Park-Miller-Carta Pseudo-Random Number Generator
/* global Phaser */
function PRNG(seed) {
    var rnd = new Phaser.RandomDataGenerator(Array.isArray(seed) ? seed : [seed]);
	this.seed = rnd.frac() || 1;
	this.next = function() { return (this.gen() / 2147483647); };
	this.nextRange = function(min, max)	{ return min + ((max - min) * this.next()) };
	this.gen = function() { return this.seed = (this.seed * 16807) % 2147483647; };
};

function perlinNoise(canvas, baseX, baseY, seed) {
    var rand = new PRNG(seed);
    var ctx = canvas.getContext('2d');
    var imagedata = ctx.createImageData(canvas.width, canvas.height);
    var data = imagedata.data;

    var simplexR = new SimplexNoise(rand);
    simplexR.setSeed(seed);

    var simplexG = new SimplexNoise(rand);
    simplexG.setSeed(seed + 1);

    var simplexB = new SimplexNoise(rand);
    simplexB.setSeed(seed + 2);

    var pos, cr, cg, cb, gray;
    for (var y = 0; y < canvas.height; y ++) {
        for (var x = 0; x < canvas.width; x ++) {
            pos = (x + y * canvas.width) * 4;

            cr = Math.floor(((simplexR.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);
            cg = Math.floor(((simplexG.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);
            cb = Math.floor(((simplexB.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);

            gray = (cr + cg + cb) / 3;

            data[pos + 0] = gray;
            data[pos + 1] = gray;
            data[pos + 2] = gray;
            data[pos + 3] = 255;
        }
    }

    ctx.putImageData(imagedata, 0, 0);
    return imagedata;
};