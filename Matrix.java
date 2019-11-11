
public class Matrix {
	private int [][] matArray;
	public Matrix(int [][] mArray){
    matArray=new int[mArray.length][mArray[0].length];
	for(int i=0;i<mArray.length;i++){
		for(int j=0;j<mArray[0].length;j++){
		   matArray [i][j]=mArray [i][j];
			}
		}
	}	
	public String toString(){
		StringBuilder p = new StringBuilder();
		p.append('{');
		if (matArray != null) {
			for (int i = 0; i < matArray.length; i++) {
				for(int j=0;j<matArray[i].length;j++){
                   	p.append(matArray[i][j]);
				}
				if (i != matArray.length - 1)
					p.append(',');
			}
		}

		p.append('}');
		return p.toString();	
	}

	public int count_row(){
	final int row_count=matArray.length;
	return row_count;
	}

	public int count_column(){
	final int col_count=matArray[0].length;
	return col_count;
	}
	
	public Matrix add(Matrix m){
		if (matArray == null || m.matArray == null)
			return null;
		if (matArray.length == 0 || m.matArray.length == 0)
			return null;
		if (matArray.length != m.matArray.length)
			return null;
		for (int i = 0; i < matArray.length; i++)
			if (matArray[i].length != m.matArray[i].length)
				return null;
		for (int i = 0; i < matArray.length - 1; i++) // 检测矩阵是否每行的列数一致
			if (matArray[i].length != matArray[i + 1].length)
				return null;
	final int row_count=matArray.length;
	final int col_count=matArray[0].length;
	int[][] b=new int[row_count][col_count];
	for(int i=0;i<row_count;i++){
		for(int j=0;j<col_count;j++){
		b[i][j]=0;
		}
	}
	Matrix c=new Matrix(b);
	for(int i=0;i<row_count;i++){
		for(int j=0;j<col_count;j++){
		c.matArray[i][j]=matArray[i][j]+m.matArray[i][j];
		}
	}
	return c;
	}

	public Matrix multi(Matrix m){
		if (matArray == null || m.matArray == null)
			return null;

		if (matArray.length == 0 || m.matArray.length == 0)
			return null;

		for (int i = 0; i < matArray.length - 1; i++) 
			if (matArray[i].length != matArray[i + 1].length)
				return null;

		for (int i = 0; i < m.matArray.length - 1; i++) 
			if (m.matArray[i].length != m.matArray[i + 1].length)
				return null;

		if (matArray[0].length != m.matArray.length) 
			return null;
	final int row_count=matArray.length;
	final int col_count=m.matArray[0].length;
	final int countK=m.matArray.length;
	int a[][]=new int[matArray.length][m.matArray[0].length];
	for(int i=0;i<row_count;i++){
		for(int j=0;j<col_count;j++){
				a[i][j]=0;	
			}
	}
	Matrix c=new Matrix(a);
	for(int i=0;i<row_count;i++){
		for(int j=0;j<col_count;j++){
			for(int k=0;k<countK;k++){
			c.matArray[i][j]+=matArray[i][k]*m.matArray[k][j];
			}
		}
	}
	return c;
	}

	private boolean isNull(){
	if(matArray==null)return false;
	else return true;
	}

	private boolean isRegular(){
		int k=0;
		for(int i=0;i<matArray.length;i++) {
			int a=matArray[i].length;
			int b=matArray[i+1].length;
			if(a!=b) {k+=1;}
		}
		if(k>0)return false;
		else return true;
	}
public static void main(String[] args){
	int[][] arr1 = { {1,2,3}, {1,2,3}, {1,2,3} };
	int[][] arr2 = { {1,2,3}, {1,2,3}, {1,2,3} };
	Matrix m1 = new Matrix(arr1);
	Matrix m2 = new Matrix(arr2);
	Matrix m3 = m1.add(m2);
	Matrix m4 = m2.multi(m1);
	System.out.println(m1.toString());
	System.out.println(m2.toString());
	System.out.println(m3.toString());
	System.out.println(m4.toString());
} 
}