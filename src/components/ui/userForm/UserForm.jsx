import styles from "./userForm.module.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../redux/userSlice";
import Button from "../button/Button";

function UserForm({ userId }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const currentUser = users.find((user) => user.id === parseInt(userId));

  const [isInputActive, setInputActive] = useState({
    name: false,
    username: false,
    city: false,
    email: false,
    phone: false,
    company: false,
  });

  const [formData, setFormData] = useState({
    name: currentUser ? currentUser.name : "",
    username: currentUser ? currentUser.username : "",
    city: currentUser ? currentUser.address.city : "",
    email: currentUser ? currentUser.email : "",
    phone: currentUser ? currentUser.phone : "",
    company: currentUser ? currentUser.company.name : "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    username: false,
    city: false,
    email: false,
    phone: false,
    company: false,
  });

  const isDisabled =
    !currentUser || Object.values(validationErrors).some((error) => error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        userId: parseInt(userId),
        newData: formData,
      })
    );
  };

  const handleFocus = (fieldName) => {
    setInputActive((prevFocus) => ({
      ...prevFocus,
      [fieldName]: true,
    }));
  };

  const handleBlur = (fieldName) => {
    setInputActive((prevFocus) => ({
      ...prevFocus,
      [fieldName]: false,
    }));
  };

  const handleReset = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Имя</label>
      <div className={styles.wrapper}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          placeholder="Введите имя"
        />
        {isInputActive.name && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("name")}
          ></button>
        )}
      </div>

      <label htmlFor="username">Никнейм</label>
      <div className={styles.wrapper}>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onFocus={() => handleFocus("username")}
          onBlur={() => handleBlur("username")}
          placeholder="Введите никнейм"
        />
        {isInputActive.username && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("username")}
          ></button>
        )}
      </div>

      <label htmlFor="email">Почта</label>
      <div className={styles.wrapper}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          placeholder="Введите почту"
        />
        {isInputActive.email && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("email")}
          ></button>
        )}
      </div>

      <label htmlFor="city">Город</label>
      <div className={styles.wrapper}>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          onFocus={() => handleFocus("city")}
          onBlur={() => handleBlur("city")}
          placeholder="Введите город"
        />
        {isInputActive.city && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("city")}
          ></button>
        )}
      </div>

      <label htmlFor="phone">Телефон</label>
      <div className={styles.wrapper}>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => handleFocus("phone")}
          onBlur={() => handleBlur("phone")}
          placeholder="Введите телефон"
        />
        {isInputActive.phone && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("phone")}
          ></button>
        )}
      </div>

      <label htmlFor="company">Название компании</label>
      <div className={styles.wrapper}>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onFocus={() => handleFocus("company")}
          onBlur={() => handleBlur("company")}
          placeholder="Введите название компании"
        />
        {isInputActive.company && (
          <button
            type="reset"
            title="Click me to clear the input field"
            className={styles.reset}
            onMouseDown={() => handleReset("company")}
          ></button>
        )}
      </div>

      <Button type="submit" isDisabled={isDisabled}>
        Сохранить
      </Button>
    </form>
  );
}

export default UserForm;
