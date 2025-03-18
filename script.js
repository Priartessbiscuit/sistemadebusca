document.getElementById('searchButton').addEventListener('click', async () => {
    const userId = document.getElementById('userId').value;
    const userInfoDiv = document.getElementById('userInfo');
  
    if (!userId) {
      userInfoDiv.innerHTML = '<p>Por favor, insira um ID válido.</p>';
      return;
    }
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) throw new Error('Usuário não encontrado');
  
      const user = await response.json();
  
      userInfoDiv.innerHTML = `
        <h2>Detalhes do Usuário</h2>
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Telefone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <h3>Endereço</h3>
        <p>${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}</p>
        <h3>Empresa</h3>
        <p><strong>Nome:</strong> ${user.company.name}</p>
        <p><strong>Slogan:</strong> "${user.company.catchPhrase}"</p>
      `;
    } catch (error) {
      userInfoDiv.innerHTML = '<p>Usuário não encontrado.</p>';
      console.error(error.message);
    }
  });
  