import image from '../../public/logos/torahportions/torahportions-logo-color.svg';

const torahSections = [
  {
    id: '#this-week-portion',
    name: "This Week's Portion"
  },
  {
    id: '#next-week-portion',
    name: "Next Week's Portion"
  },
  {
    id: '#gospel-insights',
    name: 'Gospel Insights'
  },
  {
    id: '#free-portions-cards',
    name: 'Free Portions Cards'
  },
  {
    id: '#portions-library',
    name: 'Torah Portions Library'
  },
  {
    id: '#portions-schedule',
    name: 'Complete Torah Portions Schedule'
  },
  {
    id: '#birthday-portion',
    name: 'My Birthday Portion'
  },
  {
    id: '#study-for-disciples',
    name: 'Torah Study for Disciples'
  }
];

const torahNavigationInfo = {
  sectionLabel: 'ABOUT TORAH PORTIONS',
  sectionImage: image,
  sections: torahSections
};

export default torahNavigationInfo;
