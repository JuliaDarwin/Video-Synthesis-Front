import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-homepage',
  imports: [],
  templateUrl: './reviews-homepage.html',
  styleUrl: './reviews-homepage.css',
})
export class ReviewsHomepage {
  reviews = [
    {
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face',
      avatarAlt: 'Sarah Johnson',
      name: 'Austin Wong',
      role: 'Head Video Producer, The Ocean Race',
      stars: 5,
      text: 'Sergi is a talented, creative and hard-working motion designer who played a key role in delivering The Ocean Race 2022–23. He produced top-tier graphics, social edits and live-event content that impressed teams, sponsors and partners alike. Sergi’s also a true ocean advocate, making him the perfect fit for purpose-driven storytelling.'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      avatarAlt: 'Marcus Chen',
      name: 'Elizabeth Torres',
      role: 'Head of Audiovisual Contents, SGAE',
      stars: 5,
      text: 'Sergi is an excellent scientist and an incredibly dedicated professional. He’s also a skilled communicator and very talented with technology and audiovisual tools — a rare combination that makes him stand out. It was truly a pleasure to work with him during the Oceania expedition.'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      avatarAlt: 'Emily Rodriguez',
      name: 'Carles Gago',
      role: 'Sustainability Coordinator, NGO Xaloc',
      stars: 5,
      text: 'Working with Sergi at NGO Xaloc was a privilege. His creativity and clarity turned our sea turtle conservation efforts into powerful visual stories that connected with people. Thanks to his skills in video and science communication, we brought marine conservation closer to society in a way that truly made an impact.'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      avatarAlt: 'Emily Rodriguez',
      name: 'Mario Picazo',
      role: 'Meteorologist & Presenter, Mediaset',
      stars: 5,
      text: 'I worked with Sergi during the Oceania expedition in Panama and was impressed by his professionalism, communication skills and deep knowledge of climate topics. He managed interviews, research and storytelling with precision and care — a valuable asset to any science-driven project.'
    }
  ];
}
