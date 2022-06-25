import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FlatService } from 'src/app/services/flat.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
declare var window: any;
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  userFormModal : any
  flatFormModal : any
  removeModal : any
  userForm = {
    id : '',
    name : '',
    email : '',
    flat_id : ''
  }

  flatForm = {
    name : '',
    location : ''
  }
  deleteForm = {
    id : '',
    name : '',
  
  }

  constructor(private userService : UserService,
    private flatService : FlatService,
    private norificationService : NotificationService) { 
  }

  ngOnInit(): void {
    this.userFormModal = new window.bootstrap.Modal(
      document.getElementById('userModal')
    );
    this.flatFormModal = new window.bootstrap.Modal(
      document.getElementById('flatModal')
    );
    this.removeModal = new window.bootstrap.Modal(
      document.getElementById('confirmationDelete')
    );
    this.getAllUser()
    this.getAllFlat()
  }

  users = null;
  flats = null;

  getAllUser(){
    this.userService.GetAllUser().subscribe(x=>{

      this.users = x.data
    })
  }

  getAllFlat(){
    this.flatService.GetAllFlat().subscribe(x=>{
      this.flats = x.data
    })
  }

  onSubmitUser(){
    this.userService.submitUser(this.userForm).subscribe(x=> {
      this.getAllUser()
     this.resetUserForm()
      this.userFormModal.hide();
      this.norificationService.showSuccess(x.message,"Submit User")
    }, err => {
      this.norificationService.showError(err.error.message, "Error")
      this.userFormModal.hide();
    })
  }

  onSubmitFlat(){
    this.flatService.Submit(this.flatForm).subscribe(x=>{
      this.getAllFlat()
      this.resetFlatForm()
      this.flatFormModal.hide();
      this.norificationService.showSuccess(x.message,"Submit Flat")
    },
    err => {
      this.norificationService.showError(err.error.message, "Error")
      this.flatFormModal.hide();
    })
  }

  onUserEdit(user : any){
    this.userForm = {
      id : user.id,
      name : user.name,
      email : user.email,
      flat_id : user.flat_id
    }
    this.userFormModal.show()
  }
  onRemoveUser(user : any){
    this.deleteForm.id = user.id
    this.deleteForm.name = user.name
    this.removeModal.show()
  }

  onConfirmDelete(){
    this.userService.removeUser(this.deleteForm.id).subscribe(x=> 
      {
        this.getAllUser()
        this.norificationService.showSuccess(x.message,"Remove User")
        this.removeModal.hide()
      },
      err => {
        this.norificationService.showError(err.error.message, "Error")
      })
  }
  onConfirmationModalClose(){
    this.removeModal.hide()
  }

  resetUserForm(){
    this.userForm = {
      id : '',
      name : '',
      email : '',
      flat_id :''
    }
  }
  resetRemoveForm(){
    this.deleteForm = {
      id : '',
      name : ''
    }
  }
  resetFlatForm(){
    this.flatForm = {
      name : '',
      location : ''
    }
  }
  onModalFlatClose(){
    this.resetFlatForm()
    this.flatFormModal.hide()
  }
  openFlatModal(){
    this.resetFlatForm()
    this.flatFormModal.show()
  }

  onModalClose(){
    this.resetUserForm()
    this.userFormModal.hide()
  }
  openUserModal(){
    this.resetUserForm()
    this.userFormModal.show()
  }

}

