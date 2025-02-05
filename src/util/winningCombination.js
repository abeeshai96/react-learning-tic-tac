export const generateWinningLines = (size) => {
  const lines = [];

  // **Rows**
  for (let i = 0; i < size; i++) {
    lines.push(Array.from({ length: size }, (_, j) => i * size + j));
  }

  // **Columns**
  for (let i = 0; i < size; i++) {
    lines.push(Array.from({ length: size }, (_, j) => j * size + i));
  }

  // **Main Diagonal (Top-Left to Bottom-Right)**
  lines.push(Array.from({ length: size }, (_, i) => i * (size + 1)));

  // **Anti-Diagonal (Top-Right to Bottom-Left)**
  lines.push(Array.from({ length: size }, (_, i) => (i + 1) * (size - 1)));

  return lines;
};
