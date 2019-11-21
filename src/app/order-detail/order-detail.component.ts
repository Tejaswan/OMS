import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component'
import { OrderDetailService } from '../shared/order-details.service'
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
	orderdetails = [	
	];

  constructor(private modalService: NgbModal,private orderDetailService:OrderDetailService) {}
  ngOnInit() {
	this.viewTableData()
  }

  viewTableData(){
	const uri='/postgres/sel/select/oms/viewOrderDetails'
	this.orderDetailService.ExecutePostService(uri,{}).subscribe(res => {
		this.orderdetails=res;
	})
  }
  openFormModal() {
  	const modalRef = this.modalService.open(ModalFormComponent);
  	modalRef.result.then((result) => {
		if (result) {
			const uri='/postgres/sel/select/oms/saveOrderDetails'
			this.orderDetailService.ExecutePostService(uri,result).subscribe(res => {
				if(res[0].status==true){
					this.viewTableData()
				}
			})
		}
	});
  }
  deleteOrder(order) {
  	const modalRef = this.modalService.open(DeleteModalComponent);
  	modalRef.componentInstance.order = order;
  	modalRef.result.then((result) => {
		if (result) {
			const uri='/postgres/sel/select/oms/deleteOrderDetails'
			this.orderDetailService.ExecutePostService(uri,{"order_id":result.order_id}).subscribe(res => {
				if(res[0].status==true){
					this.viewTableData()
				}
			})
		}
	});
  }
  editOrder (order) {
	const modalRef = this.modalService.open(ModalFormComponent);
	modalRef.componentInstance.order = order;
 	modalRef.result.then((result) => {
		if (result) {
			const uri='/postgres/sel/select/oms/modifyOrderDetails'
			this.orderDetailService.ExecutePostService(uri,result).subscribe(res => {
				if(res[0].status==true){
					this.viewTableData()
				}
			})
		}
	});
  }
}