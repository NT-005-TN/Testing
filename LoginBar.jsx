import React, { useState } from 'react';
import './LoginBar.css';
import coffeeImage from '../../assets/barista.png'; // твоя картинка кофейни
import beansImage from '../../assets/coffee-beans.png';

const LoginBar = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для входа:', formData);
  };

  return (
    <div className="login-page">
      {/* Левая часть — картинка */}
      <div className="login-left">
        <img src={coffeeImage} alt="Бариста" className="barista" />
      </div>

      {/* Правая часть — форма */}
      <div className="login-right">
        <div className="login-container">

          <div className="login-header">
            <img 
              src={beansImage} 
              alt="Кофейные зёрна" 
              className="beans-image"
            />
            <h1>С возвращением!</h1>
            <p>Пожалуйста, займите свой кофейный уголок</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Ваша почта"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-links">
              <label className="remember-me">
                <input type="checkbox" /> Запомните меня
              </label>
              <a href="/forgot-password" className="forgot-password">
                Забыли пароль?
              </a>
            </div>

            <button type="submit" className="login-button">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginBar;