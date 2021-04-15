import { Element } from '@wdio/sync';
export class accountDetailsPageLocators {
  get firstNameInput(): Element {
    return $('input[id="account-details-first-name"]');
  }

  get lastNameInput(): Element {
    return $('input[id="account-details-last-name"]');
  }

  get emailInput(): Element {
    return $('input[id="account-details-email"]');
  }

  get oldPasswordInput(): Element {
    return $('input[id="account-details-old-password"]');
  }

  get newPasswordInput(): Element {
    return $('input[id="password"] ');
  }

  get saveChangesBtn(): Element {
    return $('.button.full-width.button-primary');
  }

  get AccountDetailsHeading(): Element {
    return $('h1.text-center');
  }

  get firstNameValidationMsg(): Element {
    return $('input#account-details-first-name + span.error');
  }

  get lastNameValidationMsg(): Element {
    return $('input#account-details-last-name + span.error');
  }

  get newPasswordFieldValidationMsg(): Element {
    return $('div.password + span.error');
  }

  get showHideLink(): Element {
    return $('input#password + button.hide-show-button');
  }

  get appointmentsLink(): Element {
    return $('.help-menu ul li:nth-child(4) >a');
  }
}