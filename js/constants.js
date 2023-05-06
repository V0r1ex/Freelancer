const registrationInner = `    
<div class="registration-inner">
    <button class="registration__close-btn" onclick="closeRegistration()">&#10006</button>
    <form action="#" class="registration-form">
        <div class="registration__body">  
            <h2 class="registration__title">Registration</h2>
            <div class="registration__fields">
                <input class="registration__input" spellcheck="false" type="text" placeholder="Your name" required name="name">
                <input class="registration__input" spellcheck="false" type="text" placeholder="Your E-Mail" required name="email">
                <input class="registration__input" type="password" placeholder="Your password" required name="password">
                <input class="registration__input" type="password" placeholder="Repeat password" required name="nextPassword">
            </div>
            <div class="registration__row">
                <label class="registration__remember"><input class="registration__checkbox" type="checkbox" name="remember">Remember me</label>
                <div class="registration__singin" onclick="autorization()">Got an account?</div>
            </div>
        </div>
        <button class="registration__submit base-btn">Registration</button>
    </form>
</div>`

const autorizationInner = `    
<div class="registration-inner">
    <button class="registration__close-btn" onclick="closeRegistration()">&#10006</button>
    <form action="#" class="registration-form">
        <div class="registration__body">  
            <h2 class="registration__title">Autorization</h2>
            <div class="registration__fields">
                <input class="registration__input" spellcheck="false" type="text" placeholder="Your name" required name="name">
                <input class="registration__input" spellcheck="false" type="text" placeholder="Your E-Mail" required name="email">
                <input class="registration__input" type="password" placeholder="Your password" required name="password">
            </div>
            <div class="registration__row">
                <label class="registration__remember"><input class="registration__checkbox" type="checkbox" name="remember">Remember me</label>
                <button class="registration__singin" onclick="autorization()">Forgot password?</button>
            </div>
        </div>
        <button class="registration__submit base-btn">Log in</button>
    </form>
</div>`