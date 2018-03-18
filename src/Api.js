export const postRegisterForm = (state) => {
        fetch('http://192.168.43.178:3000/register',{  //http://192.168.43.178:3000/register
            method: 'POST',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                email : state.email,
                userName : state.displayName,
                password : state.password,
                name : state.Name,
                mobile : state.contectNo
            })
        }).then((res) => {
            return res.json();
        }).then(
            (data) => {
                console.log(data)
                localStorage.setItem("token", data.token);
            }
        ).catch((err) => {
            console.log(err);
        })

};

export const getCourses = () => {
    const promise = new Promise(function(resolve, reject){
        fetch('http://192.168.43.178:3000/courses').then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            return resolve(data);
        }).catch((err) => {
            return reject(err);
        })
    });
    return promise;
};