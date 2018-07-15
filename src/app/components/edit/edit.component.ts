import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  member: Member;
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bnk: BnkService,
    private router: Router) { }

  ngOnInit() {

    // const myFg = new FormGroup({
    //   _id: new FormControl()
    // });

    this.bnk.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.member = data;
        this.editForm = this.fb.group({
          _id: [data._id, Validators.required],
          name: [data.name, Validators.required],
          imgUrl: [data.imgUrl, [Validators.required, UrlValidator.validate]],
          instagramId: [data.instagramId, Validators.required]
        });
      });
  }

  reset() {
    this.editForm.reset(this.member);
  }

  save() {
    if (this.editForm.valid) {
      this.bnk.save(this.member._id, this.editForm.value)
        .subscribe(data => {
          this.router.navigate(['/admin']);
        });
    } else {
      alert('เฮ้ย!!');
      console.log(this.editForm.get('imgUrl').getError('url'));
    }
  }
}
