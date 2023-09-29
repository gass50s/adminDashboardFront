import { Validators } from '@angular/forms';
import { SignInComponent } from 'src/app/modules/users-managements/sign-in/sign-in.component';
interface JsonFormValidators {
  required: boolean;
  selected:boolean;
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  icon: string;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  controls: JsonFormControls[];
}

export const createForm = (controls: any, fb: any) => {
  const myform = fb.group({});

  if (Array.isArray(controls.controls)) {
    controls.controls.forEach((control: any) => {
      const validatorToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'required':
            if (value) {
              validatorToAdd.push(Validators.required);
            }
            break;
          default:
            break;
        }
      }
      myform.addControl(control.name, fb.control(control.name));
     myform.get(control.name)?.addValidators(validatorToAdd);
     control.controls = myform.get(control.name);
    });
  }
  myform.reset();
  return myform;
};
