/**
 * Initialize the buffers we'll need. For this demo, we just
 * have one object -- a simple two-dimensional square.
 *
 * @param gl GL Object
 */
export function initBuffers(gl) {
// Create a buffer for the cube's vertex positions.

const positionBuffer = gl.createBuffer();

// Select the positionBuffer as the one to apply buffer
// operations to from here out.

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// Now create an array of positions for the cube.

const positions = [
  // Front face
  -1.0, -1.0,  1.0,//0
   1.0, -1.0,  1.0,//1
   0.0,  1.0,  0.0,//2
   0.0,  -3.0,  0.0,//3
//
  // Back face//
  -1.0, -1.0, -1.0,//4
  -1.0,  1.0, -1.0,//5
   1.0,  1.0, -1.0,//6
   1.0, -1.0, -1.0,//7
//
  // Top face//
  -1.0,  1.0, -1.0,//8
  -1.0,  1.0,  1.0,//9
   1.0,  1.0,  1.0,//10
   1.0,  1.0, -1.0,//11
//
  // Bottom face//
  -1.0, -1.0, -1.0,//12
   1.0, -1.0, -1.0,//13
   1.0, -1.0,  1.0,//14
  -1.0, -1.0,  1.0,//15
//
  // Right face//
   1.0, -1.0, -1.0,//16
   1.0,  1.0, -1.0,//17
   1.0,  1.0,  1.0,//18
   1.0, -1.0,  1.0,//19
//
  // Left face//
  -1.0, -1.0, -1.0,//20
  -1.0, -1.0,  1.0,//21
  -1.0,  1.0,  1.0,//22
  -1.0,  1.0, -1.0,//23

  
];

// Now pass the list of positions into WebGL to build the
// shape. We do this by creating a Float32Array from the
// JavaScript array, then use it to fill the current buffer.

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// Now set up the colors for the faces. We'll use solid colors
// for each face.

const faceColors = [
  [1.0,  1.0,  1.0,  1.0],    // Front face: white
  [1.0,  0.0,  0.0,  1.0],    // Back face: red
  [0.0,  1.0,  0.0,  1.0],    // Top face: green
  [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  [1.0,  0.0,  1.0,  1.0],    // Left face: purple
  
];

// Convert the array of colors into a table for all the vertices.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];

  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Build the element array buffer; this specifies the indices
// into the vertex arrays for each face's vertices.

const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

// This array defines each face as two triangles, using the
// indices into the vertex array to specify each triangle's
// position.

// const indices = [
//   0,  1,  2,      0,  2,  3,    // front
//   4,  5,  6,      4,  6,  7,    // back
//   8,  9,  10,     8,  10, 11,   // top
//   12, 13, 14,     12, 14, 15,   // bottom
//   16, 17, 18,     16, 18, 19,   // right
//   20, 21, 22,     20, 22, 23,   // left
// ];

const indices = [
  0,  1,  2,//front  
  4,  7,  2,//back
  20, 21, 2,//izquierda
  16, 19, 2,//derecha
  12, 13, 14,     12, 14, 15,   // bottom

  //Parte de abajo
  0,  1,  3,//front  
  4,  7,  3,//back
  20, 21, 3,//izquierda
  16, 19, 3,//derecha
];

// Now send the element array to GL

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices), gl.STATIC_DRAW);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};

}
