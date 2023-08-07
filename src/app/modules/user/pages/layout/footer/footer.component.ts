import { Component } from '@angular/core';
import { faDribbbleSquare, faFacebookSquare, faGithubSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dribbbleSquareIcon = faDribbbleSquare;
  facebookSquareIcon = faFacebookSquare;
  githubSquareIcon = faGithubSquare;
  instagramIcon = faInstagram;
  twitterSquareIcon = faTwitterSquare;
}
