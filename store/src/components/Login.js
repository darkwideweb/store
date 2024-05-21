import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Добавляем состояние для отслеживания успешного входа
  const [bonusMessageVisible, setBonusMessageVisible] = useState(false); // Состояние для отображения сообщения о бонусах и скидке

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Мы просто считаем, что пользователь успешно аутентифицирован, если поля не пустые
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      setBonusMessageVisible(true); // Показываем сообщение о бонусах и скидке
      onLogin();
    }
  };

  return (
    <div className="login">
      <h2>Войти в личный кабинет</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
      {isLoggedIn && bonusMessageVisible && (
        <div className="bonus-message">
          <p>Привествуем! Вы вошли в личный аккаунт и получили от нас бонусы и скидку на определённые товары!</p>
        </div>
      )}
    </div>
  );
}

export default Login;
