import {Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../business-layer/models/user';

@Component({
  selector: 'app-user-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['user']) {
        this.userForm.patchValue(changes['user'].currentValue, {emitEvent: false});
      }
  }
  ngOnInit(): void {
    if (this.user)
      this.userForm.patchValue(this.user, {emitEvent: false});
    //emitEvent false
    // this.valueChanges();

    // if(this.user)
    //   this.userForm.patchValue(this.user, {emitEvent: false});
  }

  private formBuilder = inject(FormBuilder);
  @Input() user: User | undefined | null;
  @Output() userOutput = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    id: [0],
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: ['', [Validators.required, Validators.minLength(3)]],
    role: ['', [Validators.required]]
  }, {updateOn: 'blur'});
  // valueChanges() {
  //   const key ='mainFormSubs'
  //   const subscription = this.userForm.valueChanges.subscribe(value => {
  //     console.log(value);
  //   })
  //   if map.get(key){
  //     map.remove
  //   }
  //   map.set(key, subscription);
  //   const key = 'name'
  //   this.userForm.get('name')?.valueChanges.subscribe(value => {
  //     console.log(value)
  //   })
  // }

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm);
    if (this.isValid)
      this.userOutput.emit((this.userForm.value as User));
  }

  hasValue(field: string, code: string) {
    return this.userForm.get(field)?.hasError(code);
  }

  get isValid() {
    return (this.userForm.valid && this.userForm.dirty && !this.userForm.pristine) ;
  }
}
