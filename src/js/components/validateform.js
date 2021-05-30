

export default class ValidateForm{
      constructor(form){
        this.form = form
        this.form.addEventListener(`click`, event => {
          if (event.target.classList.contains(`popup__close`)) this.resetErrors();
      });
      }

      isValidate(input){

        const errorMessages = {
          empty: 'Это обязательное поле',
          wrongLength: 'Должно быть от 2 до 30 символов',
          wrongUrl: 'Неправильный формат email',
          wrongPassword: 'Пароль должен содержать 8 символов',
        }

    input.setCustomValidity("");

        if (input.validity.valueMissing) {
            input.setCustomValidity(errorMessages.empty);
        return false
    }

        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity(errorMessages.wrongLength);
        return false
    }

        if (input.validity.patternMismatch && input.type === 'url') {
            input.setCustomValidity(errorMessages.wrongUrl);
        return false
    }

    if (input.validity.patternMismatch && input.type === 'password') {
      input.setCustomValidity(errorMessages.wrongPassword);
  return false
}

        return input.checkValidity();
      }

      validateInput(input) {

        const errorElem = input.closest('.popup__form').querySelector(`#${input.id}-error`);
        console.log(input.id)
        this.errorElem = errorElem
        this.isValidate(input)
        errorElem.textContent = input.validationMessage;
      }

      setSubmitButtonState(button, state) {
        if (state) {
            button.removeAttribute('disabled');
            button.classList.add(`popup__button_enabled`);
        } else {
            button.setAttribute('disabled', true);
            button.classList.remove(`popup__button_enabled`);
        }
      }


      handlerInputForm(evt){
        const submit = evt.currentTarget.querySelector('.popup__button');
        const [...inputs] = evt.currentTarget.elements;


        this.validateInput(evt.target)

        if (inputs.every(this.isValidate)) {
          this.setSubmitButtonState(submit, true);
        } else {
          this.setSubmitButtonState(submit, false);
        }
      }

      resetErrors(){
          const errorSpans = this.form.querySelectorAll('.error');
          errorSpans.forEach(span => span.textContent = '');
      }


  }