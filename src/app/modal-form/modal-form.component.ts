import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  @Input() public order;
  myForm: FormGroup;

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      	customer: ['', Validators.required],
		order_date: ['', Validators.required],
		order_status: ['', Validators.required],
		paid: ['', Validators.required],
		price: ['', Validators.required],
		payment_method: ['', Validators.required],
    });
  }
  ngOnInit() {
  	if (this.order) {
		  this.myForm.patchValue(this.order, { onlySelf: true });
	  }
  }
  private submitForm() {
  	if (this.order) {
  		this.myForm.value.order_id = this.order.order_id
  	}
    this.activeModal.close(this.myForm.value);
  }
}
