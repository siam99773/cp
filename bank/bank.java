package bank;
class account
{
     String name;
     protected String password;
     public String getpassword()
     {
         return this.password;
     }
        public void setpassword(String password)
        {
            this.password = password;
        }
}


public class bank {
    public static void main(String[] args) {
        account a1 = new account();
        a1.name = "SBI";
        System.out.println(a1.name);
        a1.setpassword("1234");
        System.out.println(a1.getpassword());
        

        
    }
    
    
}


