async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('textarea[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            postText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    }
    else {
        alert(response.statusText);
    }
}


function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);