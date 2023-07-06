export async function checkValidToken() {
  try {
    const token = localStorage.getItem('token');
    const result = await fetch(`/api/oauth-test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token!,
      },
    });
    await result.json();
    return true;
  } catch (err) {
    alert('유효하지 않은 카카오 계정입니다!');
    localStorage.removeItem('token');
    location.href = '/login';
  }
}
