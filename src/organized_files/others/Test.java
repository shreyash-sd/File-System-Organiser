import java.util.*;
    
    public class Test{
    
    public static void main(String[] args) {
    //   write your code here  
      Scanner scn=new Scanner(System.in);
      int n=scn.nextInt();
      int d=0;
      while(n!=0){
        n=n/10;
        d++;
      }
      while(n!=0){
        int r=n%(int)Math.pow(10,d-1);
        System.out.println(r);
        n=n/(int)Math.pow(10,d-1);
        d--;
      }
    // System.out.println("Hello World");
     }
    }