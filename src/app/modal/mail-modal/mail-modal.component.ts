import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-modal',
  standalone: true,
  imports: [],
  templateUrl: './mail-modal.component.html',
  styleUrl: './mail-modal.component.less'
})
export class MailModalComponent implements OnInit {

   @Input('customerId') customerId: number;

  @Output() unDisplayModal = new EventEmitter();

  public emailSubject : string = '';
  public emailContent: string = '';

  constructor(private loanService: LoanService, private bookService: BookService, 
    private customerService: CustomerService, private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
   
}
