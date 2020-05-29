//https://api.github.com/users/:username/repos

function getRepoList(user=String){
    fetch(`https://api.github.com/users/${user}/repos`)
        .then(res=>res.json())
        .then(resJson=> displayRepoList(resJson))
}

function displayRepoList(data){
    let newHtml = '<ul>';
    let repos =data.map(repo=> `<li>${repo.name} <a href="${repo.url}"> link</a></li>`);
    newHtml += repos + '</ul>';
    $('.repos_list').html(newHtml);
}

function handleSubmit(){
    $('body').on('submit','form', function(event){
        event.preventDefault();
        let user = $('input').val();
        getRepoList(user);
    })
}

handleSubmit();