import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailService } from '../shared/order-details.service'


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
	private router: Router,
	private orderDetailService:OrderDetailService) { }

	ngOnInit() {
	 	this.inputsForm = this.formBuilder.group({
		    username: ['', Validators.required],
		    password: ['', [Validators.required, Validators.minLength(5)]]
		});
  	}
  	onSubmit() {
		 this.submitted = true;
		 if (this.inputsForm.invalid) {
	        return;
		}
		
		var loginPayload={"user_name":"","password":""}
		loginPayload.user_name=this.inputsForm.controls.username.value
		loginPayload.password=this.inputsForm.controls.password.value
		debugger
		 const uri='/postgres/sel/select/user/login'
			this.orderDetailService.ExecutePostService(uri,loginPayload).subscribe(res => {
				if(res[0].status==true){
					this.router.navigate(['/orders'])
				}
			})
		 debugger
	    
	    
	}
}

