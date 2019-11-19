import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component'
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
	orderdetails = [	
		{
			'order_id': 1001,
			'order_date':'2017-04-17',
			'customer': 'harika@gmail.com',
			'order_status': 'Recevied',
			'paid': 'Unpaid',
			'payment_method': 'COD',
			'price': 3000
		},
		{
			'order_id': 1002,
			'order_date':'2019-07-29',
			'customer': 'rani@gmail.com',
			'order_status': 'Failed',
			'paid': 'Paid',
			'payment_method': 'PAYTM',
			'price': 1300
		},
		{
			'order_id': 1003,
			'order_date':'2019-02-21',
			'customer': 'rajesh@gmail.com',
			'order_status': 'Recevied',
			'paid': 'Unpaid',
			'payment_method': 'COD',
			'price': 55300
		},
		{
			'order_id': 1004,
			'order_date':'2019-08-10',
			'customer': 'renu@gmail.com',
			'order_status': 'Dispatched',
			'paid': 'Paid',
			'payment_method': 'PAYTM',
			'price': 13300
		},
		{
			'order_id': 1005,
			'order_date':'2019-10-14',
			'customer': 'ramesh@gmail.com',
			'order_status': 'Assigned to courier person',
			'paid': 'Unpaid',
			'payment_method': 'COD',
			'price': 30050
		}
	];

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
  }
  openFormModal() {
  	const modalRef = this.modalService.open(ModalFormComponent);
  	modalRef.result.then((result) => {
		if (result) {
			var DateObj = new Date();
			result.order_date = DateObj.getFullYear() + '-' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + DateObj.getDate()).slice(-2);
			result.order_id=this.orderdetails[(this.orderdetails.length)-1].order_id+1
			this.orderdetails.push(result)
		}
	});
  }
  deleteOrder(order) {
  	const modalRef = this.modalService.open(DeleteModalComponent);
  	modalRef.componentInstance.order = order;
  	modalRef.result.then((result) => {
		if (result) {
			var index = this.orderdetails.findIndex(x => x.order_id === result.order_id);
			this.orderdetails.splice(index,1);
		}
	});
  }
  editOrder (order) {
	const modalRef = this.modalService.open(ModalFormComponent);
	modalRef.componentInstance.order = order;
 	modalRef.result.then((result) => {
		if (result) {
			var index = this.orderdetails.findIndex(x => x.order_id === result.order_id);
			if (index != undefined) {
				this.orderdetails[index] = result
			}
		}
	});
  }
}