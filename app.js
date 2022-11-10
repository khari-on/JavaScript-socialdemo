const database = [
    {
        name:'Hari',
        profilepic:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        post:'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        caption:'This is where i live in'
    },
    {
        name:'vikram',
        profilepic:'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        post:'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        caption:'This is where i live in'
    },

    {
        name:'rohit',
        profilepic:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        post:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        caption:'This is where i live in'
    },
    {
        name:'vernica',
        profilepic:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        post:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        caption:'This is where i live in'
    }
]

const users =[
    {
        userName:'Sabari',
        password:123
    }
]


function auth(user,pass){
    console.log(user,pass)
  if(user === users[0].userName && pass === users[0].password){

    const post = document.getElementById('post')
    console.log(post)
    
   
    
    database.forEach(function(item){
        post.innerHTML+=`
        <div class='container'>
        <div class='profile'>
        <img src=${item.profilepic} alt= >
        <h3>${item.name}</h3>
        </div>
        <div class='userPost'>
        <img src=${item.post} alt=${item.caption} >
        <h5>${item.caption}</h5>
        </div>
        </div>
        
        `
    })
}else{
    alert('Please enter the valid username & password')
}
}


const name = prompt('Enter your name');
const pass = +prompt('enter your password');
// console.log(name,pass)

auth(name,pass)
