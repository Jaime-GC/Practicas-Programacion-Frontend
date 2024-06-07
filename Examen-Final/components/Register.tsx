const Register = () => {
    <div class="register-container">
        <h2>Register</h2>
        <form method="POST" action="/register">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Register</button>
            <p class="register-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </form>
    </div>
};

export default Register;