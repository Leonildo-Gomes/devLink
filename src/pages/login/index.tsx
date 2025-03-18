

export function Login () {

    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <label >Username:</label>
                <input type="text" id="username" name="username" required />
                <br/>
                <label >Password:</label>
                <input type="password" id="password" name="password" required />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <a href="/register">Register</a>
        </div>
    )
}