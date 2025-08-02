try {
    window.location.href = 'https://ticktick.com/webapp/';
} catch (error) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'block';
}