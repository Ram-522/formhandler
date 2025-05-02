import { useState } from "react";
export default function Formhandler(){
    const [name] = useState([{name:"john1"},{name:"john12"},{name:"john23"}]);
    const[userMsg,setuserMsg]=useState("");
    const[usercolor,setusercolor]=useState(false);
    const[pwdmsg,setpwdmsg]=useState("");
    const[pwdcolor,setpwdcolor]=useState(false);
    const[userdetails,setUserdetails]=useState({name:'',password:''})


    function userchange(e){
        setUserdetails({
            name:e.target.value,
            password:userdetails.password
        })

    }
    function pwdchange(e){
        setUserdetails({
            name:userdetails.name,
            password:e.target.value
        })

    }
  
  

    function handlename(e){
        for(var names of name){
            if(names.name===e.target.value){
                setuserMsg("user name already taken");
                setusercolor(false);
                break;

            }
            else{
                setuserMsg("user name available")
                setusercolor(true);
            }
        }
      
    }
    function verifypwd(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setpwdmsg("strong password");
            setpwdcolor(true);
        }else{
            if(e.target.value.length<4){
                setpwdmsg("poor password");
                setpwdcolor(false)
            }
            else{
                setpwdmsg("weak password");
                setpwdcolor(false)
            }
        }
    }
    function hidename(){
        setuserMsg("");
    }
    
    function register(){
        document.write(JSON.stringify(userdetails));
    }
    
    return(<>
    <div className="container-fluid mx-auto p-5 bg-dark-subtle" >
        <h3>Login Form</h3>
        <dl>
            <dt>UserName</dt>
            <dd><input type="text" onKeyUp={handlename} onBlur={hidename} onChange={userchange} className="form-control w-25" ></input></dd>
            <dd className={(usercolor===true)?'text-success':'text-danger'}>{userMsg}</dd>
            <dt>Password</dt>
            <dd><input type="password" onKeyUp={verifypwd} onChange={pwdchange}  className="form-control w-25"></input></dd>

            <dd className={(pwdcolor===true)?'text-success':'text-danger'}>{pwdmsg}</dd>
            <dd ><span className="text-warning"><span className="bi bi-exclamation-circle-fill"></span>Caps ON</span></dd>
        </dl>
        <button className="btn btn-info" onClick={register}>Register</button>
    </div>
    </>)
}