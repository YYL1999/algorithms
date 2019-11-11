
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var max = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            max=Math.max(max,isLand(grid,i,j))
        }
    }
}
function isLand(grid,i,j){
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === 1) {
        grid[i][j] = 0;
        return 1 + island(grid, i+1, j) + island(grid, i-1, j) + island(grid, i, j+1) + island(grid, i, j-1);
      } else return 0;
}