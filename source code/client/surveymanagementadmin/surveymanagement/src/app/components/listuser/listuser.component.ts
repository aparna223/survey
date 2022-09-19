import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private service:ServicesService) { }
   
  user:any
  ngOnInit(): void {
    this.service.userlist().subscribe({
      next:(res:any) =>{
        console.log("check"+res);
        this.user=res
      },
      error:(erar : any) =>{
        console.log(erar);
      }
    })
  }
  deleteItem(data : any){
    console.log(data);
    this.service.delete1(data).subscribe({
      next:(res:any) =>{
        console.log(res);
        window.location.reload();
      },
      error:(erar: any) =>{
        console.log(erar);
      }
    });
  }

}
