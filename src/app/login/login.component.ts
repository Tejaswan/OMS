import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  inputsForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }
	ngOnInit() {
	 	this.inputsForm = this.formBuilder.group({
		    username: ['', Validators.required],
		    password: ['', [Validators.required, Validators.minLength(6)]]
		});
  	}
  	onSubmit() {
 		this.submitted = true;
	    if (this.inputsForm.invalid) {
	        return;
	    }
	    this.router.navigate(['/orders'])
	}
}

