import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  surveyForm: FormGroup = new FormGroup({
    surveyName: new FormControl,
    description: new FormControl,
    adminId: new FormControl,
    startDate: new FormControl,
    endDate: new FormControl,
    questions: new FormArray([this.surveyQuestion()])


  })
  surveyQuestion() {
    return new FormGroup(
      {
        question: new FormControl,
        questionType: new FormControl
      }
    )
   
  }

  onSubmit(): void {
    console.log(this.surveyForm.value)
    this.service.addSurvey(this.surveyForm)


    console.warn(this.surveyForm.value)
  }
  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  addQuestion(): any {
    this.questions.push(this.surveyQuestion())

  }

  deleteQuestion(i: any) {
    if (this.questions.controls.length > 1) {
      this.questions.removeAt(i);
    }
  }

}

