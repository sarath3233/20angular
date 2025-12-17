import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic',
  imports: [CommonModule, FormsModule],
  templateUrl: './generic.html',
  styleUrl: './generic.scss',
})
export class Generic {
  @Input() data: any;
  ngOnInit() {
    console.log(this.data);
  }
  toggleDropdown() {
    throw new Error('Method not implemented.');
  }
  selectProvider(_t33: any) {
    throw new Error('Method not implemented.');
  }

  hovered: any;
  hoveredStates: Set<any> = new Set();
  selectedProvider: any;
  isOpen: any;

  // Map type/viewType to HTML tags
  getTag(item: any): string {
    if (item.type === 'view' && item.viewType === 'button') return 'button';
    if (item.type === 'view' && item.viewType === 'menuTabButton')
      return 'button';
    if (item.type === 'view' && item.viewType === 'inputField') return 'input';
    if (item.type === 'view' && item.viewType === 'dropdownField')
      return 'dropdown';
    if (item.type === 'view' && item.viewType === 'image') return 'img';
    if (item.type === 'view' && item.viewType === 'textView') return 'tv';
    if (item.viewType === 'view') return 'div';
    //if (item.viewType === 'textView') return 'div';
    if (item.type === 'paragraph') return 'p';
    if (item.type === 'bullets') return 'li';

    return 'div'; // default fallback
  }

  getAlignment(item: any): string {
    return item.alignment ? `text-align: ${item.alignment}` : '';
  }

  getStyle(item: any): string {
    if (item.style === 'emphasized') return 'font-weight: bold;';
    return '';
  }

  getGradientStyle(
    item: any,
    state: 'unselected' | 'selected' | 'hovered'
  ): any {
    if (item.bgColorGradient && item.bgColorGradient[state]) {
      const colors = item.bgColorGradient[state];
      console.log(`linear-gradient(to right, ${colors[0]}, ${colors[1]});`);
      return {
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]});`,
      };
    }
    return {};
  }

  getLayoutStyle(item: any): { [key: string]: string } {
    return {
      display: 'flex',
      "'flex-direction'":
        item.contentLayout === 'horizontal' ? 'row' : 'column',
      gap: '10px',
    };
  }

  getCssBasedOnViewType(item: any): string {
    var cssName = '';
    if (item.viewType === 'largeCard') {
      cssName = 'large-card';
    }
    if (item.viewType === 'smallCard') {
      cssName = 'small-card';
    }
    if (item.viewType === 'cardContainer') {
      cssName = 'card-container';
    }
    if (item.viewType === 'searchBar') {
      cssName = 'large-card';
    }
    if (item.style === 'roundRect') {
      cssName = 'round-rect';
    }
    if (item.viewType === 'menuTabButton' && item.style === 'roundRect') {
      cssName = 'round-rect-hoverable';
    }
    if (item.viewType === 'shadowBorder') {
      cssName = 'horizontal-border';
    }
    return cssName;
  }

  getPlaceholderIfAvailable(item: any): string {
    if (item && item.placeHolder) return item.placeHolder;
    return '';
  }

  mergeStyles(item: any): { [key: string]: string } {
    var style = {
      ...this.getGradientStyle(
        item,
        this.isHovered(item) ? 'hovered' : 'unselected'
      ),
      ...this.getLayoutStyle(item),
      "'text-align'": item.alignment || 'left',
    };
    console.log('style', style);
    return style;
  }

  // getProviderSelectDropDownhtml(item: any) {
  //     return `<div class="form-field">
  //               <label for="providerSelect" class="field-label">${item.label}</label>

  //               <select id="providerSelect" class="custom-select" [(ngModel)]="selectedProvider">
  //                 <option value="">${item.values[0]}</option>
  //                 <option *ngFor="let provider of ${item.values}">{{ provider }}</option>
  //               </select>
  //             </div>`
  // }

  isHovered(item: any): boolean {
    return this.hoveredStates.has(item);
  }

  setHovered(item: any, hovered: boolean): void {
    if (hovered) {
      this.hoveredStates.add(item);
    } else {
      this.hoveredStates.delete(item);
    }
  }
}


let jsonData = {
  code: 200,
  message: 'success',
  data: [
    {
      align: 'right',
      width: 'max-content',
      type: 'view',
      viewType: 'body',
      padding: '',
      margin: '',
      subItems: [
        {
          type: 'view',
          contentLayout: 'vertical',
          bgColorGradient: {
            unselected: ['#FFFFFF', '#FFFFFF'],
            selected: ['#FFFFFF', '#FFFFFF'],
            hovered: ['#FFFFFF', '#FFFFFF'],
          },
          subItems: [
            {
              key: 'aafg',
              type: 'view',
              viewType: 'header',
              width: 'fit-screen',
              alignment: 'left',
              contentLayout: 'vertical',
              bgColorGradient: {
                unselected: ['#FFFFFF', '#FFFFFF'],
                selected: ['#FFFFFF', '#FFFFFF'],
                hovered: ['#FFFFFF', '#FFFFFF'],
              },
              subItems: [
                {
                  type: 'view',
                  viewType: 'topBanner',
                  contentLayout: 'horizontal',
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      align: 'left',
                      uri: {
                        default: 'icon://blueshield-banner',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'divider',
                      dividerType: 'vertical',
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'ADMIN',
                    },
                    {
                      type: 'view',
                      viewType: 'image',
                      style: 'round',
                      align: 'right',
                      uri: {
                        default: 'https://<user-image-cloud-location>',
                      },
                      ctaAction: {
                        uri: 'https://blueshield.provider.example.com/popup/loggedinuser',
                        popup: {
                          type: 'view',
                          viewType: 'popup',
                          contentLayout: 'vertical',
                          style: 'roundRect',
                          bgColorGradient: {
                            unselected: ['#FFFFFF', '#FFFFFF'],
                            selected: ['#FFFFFF', '#FFFFFF'],
                            hovered: ['#FFFFFF', '#FFFFFF'],
                          },
                          subItems: [
                            {
                              type: 'view',
                              viewType: 'layout',
                              contentLayout: 'horizontal',
                              subItems: [
                                {
                                  type: 'view',
                                  viewType: 'image',
                                  style: 'round',
                                  align: 'right',
                                  uri: {
                                    default:
                                      'https://<user-image-cloud-location>',
                                  },
                                },
                                {
                                  subItems: [
                                    {
                                      key: 'sdfdf',
                                      type: 'paragraph',
                                      alignment: 'left',
                                      subItems: [
                                        {
                                          text: 'Fedrik',
                                          style: 'emphasized',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'paragraph',
                                      alignment: 'left',
                                      subItems: [
                                        {
                                          text: 'Admin',
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: 'view',
                              viewType: 'divider',
                              dividerType: 'horizontal',
                            },
                            {
                              key: 'sdfs11',
                              type: 'button',
                              style: 'buttonGroup',
                              align: 'left',
                              subItems: [
                                {
                                  type: 'view',
                                  viewType: 'button',
                                  fontColor: {
                                    selected: '#808080',
                                    hovered: '#808080',
                                    unselected: '#808080',
                                  },
                                  subItems: [
                                    {
                                      type: 'view',
                                      viewType: 'image',
                                      uri: {
                                        default: 'icon://blueshield-faq-grey',
                                      },
                                    },
                                    {
                                      type: 'view',
                                      viewType: 'textView',
                                      label: 'FAQ',
                                    },
                                  ],
                                  ctaAction: {
                                    uri: 'https://blueshield.provider.example.com/layout/faq',
                                  },
                                },
                                {
                                  type: 'view',
                                  viewType: 'button',
                                  fontColor: {
                                    selected: '#808080',
                                    hovered: '#808080',
                                    unselected: '#808080',
                                  },
                                  subItems: [
                                    {
                                      type: 'view',
                                      viewType: 'image',
                                      uri: {
                                        default:
                                          'icon://blueshield-logout-grey',
                                      },
                                    },
                                    {
                                      type: 'view',
                                      viewType: 'textView',
                                      label: 'Logout',
                                    },
                                  ],
                                  ctaAction: {
                                    uri: 'https://blueshield.provider.example.com/layout/logout',
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
                {
                  key: 'sdfdf',
                  type: 'VerticalSpace',
                  height: 10,
                },
              ],
            },
            {
              key: 'aafh',
              type: 'view',
              viewType: 'menuBar',
              width: 'fit-screen',
              alignment: 'left',
              contentLayout: 'horizontal',
              bgColorGradient: {
                unselected: ['#FFFFFF', '#FFFFFF'],
                selected: ['#FFFFFF', '#FFFFFF'],
                hovered: ['#FFFFFF', '#FFFFFF'],
              },
              subItems: [
                {
                  type: 'view',
                  viewType: 'menuTabButton',
                  style: 'roundRect',
                  contentLayout: 'horizontal',
                  alignment: 'center',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#808080',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-home-grey',
                        selected: 'icon://blueshield-home-white',
                        hovered: 'icon://blueshield-home-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Home',
                      alignment: 'center',
                      fontColor: {
                        selected: '#FFFFFF',
                        hovered: '#FFFFFF',
                        unselected: '#808080',
                      },
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/layout/home',
                  },
                },
                {
                  type: 'view',
                  viewType: 'menuTabButton',
                  style: 'roundRect',
                  contentLayout: 'horizontal',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#808080',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-providers-grey',
                        selected: 'icon://blueshield-providers-white',
                        hovered: 'icon://blueshield-providers-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Providers',
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/dropdown/providers',
                  },
                  dropdownData: [],
                },
                {
                  type: 'view',
                  viewType: 'menuTabButton',
                  style: 'roundRect',
                  contentLayout: 'horizontal',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#808080',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-cm-grey',
                        selected: 'icon://blueshield-cm-white',
                        hovered: 'icon://blueshield-cm-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Contact Management',
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/dropdown/contact-management',
                  },
                  dropdownData: [],
                },
                {
                  type: 'view',
                  viewType: 'menuTabButton',
                  style: 'roundRect',
                  contentLayout: 'horizontal',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#808080',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-reports-grey',
                        selected: 'icon://blueshield-reports-white',
                        hovered: 'icon://blueshield-reports-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Reports',
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/dropdown/reports',
                  },
                  dropdownData: [],
                },
                {
                  type: 'view',
                  viewType: 'menuTabButton',
                  style: 'roundRect',
                  contentLayout: 'horizontal',
                  visibility: 'visible',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#808080',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-admin-grey',
                        selected: 'icon://blueshield-admin-white',
                        hovered: 'icon://blueshield-admin-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Admin',
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/dropdown/admin',
                  },
                  dropdownData: [],
                },
              ],
            },
          ],
        },
        {
          type: 'view',
          viewType: 'bodyLayout',
          contentLayout: 'vertical',
          bgColorGradient: {
            unselected: ['#F5F5F5', '#F5F5F5'],
            selected: ['#F5F5F5', '#F5F5F5'],
            hovered: ['#F5F5F5', '#F5F5F5'],
          },
          subItems: [
            {
              key: 'aafh1',
              type: 'view',
              viewType: 'shadowBorder',
              width: '100%',
            },
            {
              type: 'view',
              marginTop: '5px',
              bgColorGradient: {
                unselected: ['#F5F5F5', '#F5F5F5'],
                selected: ['#F5F5F5', '#F5F5F5'],
                hovered: ['#F5F5F5', '#F5F5F5'],
              },
              subItems: [
                {
                  type: 'view',
                  alignment: 'center',
                  width: '600px',
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'smallCard',
                      style: 'roundRect',
                      bgColorGradient: {
                        unselected: ['#c9e2ff', '#c9e2ff'],
                        selected: ['#c9e2ff', '#c9e2ff'],
                        hovered: ['#c9e2ff', '#c9e2ff'],
                      },
                      alignment: 'center',
                      contentLayout: 'horizontal',
                      subItems: [
                        {
                          type: 'view',
                          viewType: 'image',
                          uri: {
                            default: 'icon://blueshield-alert-i',
                          },
                        },
                        {
                          type: 'view',
                          contentLayout: 'vertical',
                          subItems: [
                            {
                              key: 'sdfdf',
                              type: 'paragraph',
                              alignment: 'center',
                              subItems: [
                                {
                                  text: 'Welcome to Provider Information & Contact Center (PICC)',
                                  style: 'emphasized',
                                },
                              ],
                            },
                            {
                              type: 'paragraph',
                              alignment: 'center',
                              subItems: [
                                {
                                  text: 'Admin Mode: You have full access to create, edit & manage providers and updates',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'view',
              viewType: 'searchBar',
              alignment: 'center',
              contentLayout: 'horizontal',
              subItems: [
                {
                  type: 'view',
                  viewType: 'inputField',
                  style: 'roundRect',
                  width: '600px',
                  placeHolder:
                    'Search Providers PIN, Facet ID, Tax ID, Name, Location...',
                  borderColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                },
                {
                  type: 'view',
                  viewType: 'dropdownField',
                  style: 'roundRect',
                  label: 'Select',
                  enabled: true,
                  visibility: 'visible',
                  values: ['Providers', 'Contacts', 'LOB', 'All Categories'],
                  borderColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                },
                {
                  type: 'view',
                  viewType: 'button',
                  style: 'roundRect',
                  bgColorGradient: {
                    unselected: ['#0071BD', '#0071BD'],
                    selected: ['#0071BD', '#0071BD'],
                    hovered: ['#0071BD', '#0071BD'],
                  },
                  fontColor: {
                    selected: '#FFFFFF',
                    hovered: '#FFFFFF',
                    unselected: '#FFFFFF',
                  },
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'image',
                      uri: {
                        default: 'icon://blueshield-search-white',
                      },
                    },
                    {
                      type: 'view',
                      viewType: 'textView',
                      label: 'Search',
                    },
                  ],
                  ctaAction: {
                    uri: 'https://blueshield.provider.example.com/search',
                  },
                },
              ],
            },
            {
              type: 'view',
              viewType: 'cardContainer',
              contentLayout: 'horizontal',
              subItems: [
                {
                  type: 'view',
                  viewType: 'cardContainer',
                  contentLayout: 'vertical',
                  style: 'roundRect',
                  subItems: [
                    {
                      type: 'view',
                      viewType: 'smallCard',
                      contentLayout: 'vertical',
                      bgColorGradient: {
                        unselected: ['#c9e2ff', '#c9e2ff'],
                        selected: ['#c9e2ff', '#c9e2ff'],
                        hovered: ['#c9e2ff', '#c9e2ff'],
                      },
                      fontColor: {
                        selected: '#080808',
                        hovered: '#080808',
                        unselected: '#080808',
                      },
                      subItems: [
                        {
                          key: 'sdfdf',
                          type: 'paragraph',
                          alignment: 'center',
                          subItems: [
                            {
                              text: 'Active Providers',
                              style: 'large-emphasized',
                            },
                          ],
                        },
                        {
                          type: 'paragraph',
                          alignment: 'center',
                          subItems: [
                            {
                              text: 'View and manage currently active providers',
                            },
                          ],
                        },
                        {
                          type: 'view',
                          viewType: 'button',
                          style: 'roundRect',
                          bgColorGradient: {
                            unselected: ['#0071BD', '#0071BD'],
                            selected: ['#0071BD', '#0071BD'],
                            hovered: ['#0071BD', '#0071BD'],
                          },
                          fontColor: {
                            selected: '#FFFFFF',
                            hovered: '#FFFFFF',
                            unselected: '#FFFFFF',
                          },
                          subItems: [
                            {
                              type: 'view',
                              viewType: 'image',
                              uri: {
                                default: 'icon://blueshield-arrow-white',
                              },
                            },
                            {
                              type: 'view',
                              viewType: 'textView',
                              label: 'ACCESS ACTIVE PROVIDERS',
                            },
                          ],
                          ctaAction: {
                            uri: 'https://blueshield.provider.example.com/active-providers',
                          },
                        },
                      ],
                    },
                    {
                      type: 'view',
                      viewType: 'smallCard',
                      contentLayout: 'vertical',
                      bgColorGradient: {
                        unselected: ['#FFEAE9', '#FFEAE9'],
                        selected: ['#FFEAE9', '#FFEAE9'],
                        hovered: ['#FFEAE9', '#FFEAE9'],
                      },
                      fontColor: {
                        selected: '#080808',
                        hovered: '#080808',
                        unselected: '#080808',
                      },
                      subItems: [
                        {
                          key: 'sdfdf',
                          type: 'paragraph',
                          alignment: 'center',
                          subItems: [
                            {
                              text: 'Terminated Providers',
                              style: 'large-emphasized',
                            },
                          ],
                        },
                        {
                          type: 'paragraph',
                          alignment: 'center',
                          subItems: [
                            {
                              text: 'View archived and terminated providers records',
                            },
                          ],
                        },
                        {
                          type: 'view',
                          viewType: 'button',
                          style: 'roundRect',
                          bgColorGradient: {
                            unselected: ['#FF4D49', '#FF4D49'],
                            selected: ['#FF4D49', '#FF4D49'],
                            hovered: ['#FF4D49', '#FF4D49'],
                          },
                          fontColor: {
                            selected: '#FFFFFF',
                            hovered: '#FFFFFF',
                            unselected: '#FFFFFF',
                          },
                          subItems: [
                            {
                              type: 'view',
                              viewType: 'image',
                              uri: {
                                default: 'icon://blueshield-arrow-white',
                              },
                            },
                            {
                              type: 'view',
                              viewType: 'textView',
                              label: 'ACCESS TERMINATED PROVIDERS',
                            },
                          ],
                          ctaAction: {
                            uri: 'https://blueshield.provider.example.com/active-providers',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'view',
                  viewType: 'largeCard',
                  contentLayout: 'vertical',
                  style: 'roundRect',
                  bgColorGradient: {
                    unselected: ['#FFFFFF', '#FFFFFF'],
                    selected: ['#FFFFFF', '#FFFFFF'],
                    hovered: ['#FFFFFF', '#FFFFFF'],
                  },
                  subItems: [
                    {
                      key: 'sdfdf',
                      type: 'paragraph',
                      alignment: 'center',
                      subItems: [
                        {
                          text: 'PICC HOMEPAGE VERBIAGE (DRAFT)',
                          style: 'large-emphasized',
                          fontsize: '60px',
                        },
                      ],
                    },
                    {
                      type: 'paragraph',
                      alignment: 'center',
                      subItems: [
                        {
                          text: 'This site contains internal and external provider contact information for:',
                        },
                      ],
                    },
                    {
                      type: 'view',
                      viewType: 'divider',
                      dividerType: 'horizontal',
                    },
                    {
                      key: 'sdfdfa',
                      type: 'view',
                      alignment: 'center',
                      contentLayout: 'horizontal',
                      subItems: [
                        {
                          key: 'sdfdfa',
                          type: 'view',
                          alignment: 'center',
                          contentLayout: 'vertical',
                          subItems: [
                            {
                              key: 'sdfdfab',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'IPA/MGs',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Independent Physician Associations and Medical Groups',
                                },
                              ],
                            },
                            {
                              key: 'sdfdfab1',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'Hospitals',
                                  style: 'emphasized',
                                },
                              ],
                            },
                            {
                              key: 'sdfdfab2',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'ASCs',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Ambulatory Surgery Centers',
                                },
                              ],
                            },
                            {
                              key: 'sdfdfab3',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'SNFs',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Skilled Nursing Facilities',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          key: 'sdfdfa',
                          type: 'view',
                          alignment: 'center',
                          subItems: [
                            {
                              key: 'sdfdfb',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'Navigate',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Click on the provider category cards above to browse by status',
                                },
                              ],
                            },
                            {
                              key: 'sdfdfb2',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'Search',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Enter PIN, Facets ID, Tax ID or Provider Name in the search bar',
                                },
                              ],
                            },
                            {
                              key: 'sdfdfb3',
                              type: 'bullets',
                              alignment: 'left',
                              subItems: [
                                {
                                  text: 'Select',
                                  style: 'emphasized',
                                },
                                {
                                  text: 'Choose the provider from auto-complete suggestions for quick access',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'view',
              viewType: 'layout',
              contentLayout: 'horizontal',
              style: 'transparent',
              width: 'fill-parent',
              subItems: [
                {
                  type: 'view',
                  viewType: 'image',
                  style: 'roundSquare',
                  align: 'left',
                  padding: '5px',
                  uri: {
                    default: 'icon://blueshield-update-grey',
                  },
                },
                {
                  type: 'view',
                  viewType: 'textView',
                  text: 'Updates',
                  style: 'emphasized',
                  fontsize: '20px',
                },
                {
                  type: 'view',
                  viewType: 'image',
                  style: 'transparent',
                  align: 'right',
                  padding: '5px',
                  uri: {
                    default: 'icon://blueshield-edit-pen-grey',
                  },
                },
              ],
            },
            {
              type: 'view',
              viewType: 'layout',
              contentLayout: 'vertical',
              style: 'roundRect',
              width: 'fill-parent',
              bgColorGradient: {
                unselected: ['#FFFFFF', '#FFFFFF'],
                selected: ['#FFFFFF', '#FFFFFF'],
                hovered: ['#FFFFFF', '#FFFFFF'],
              },
              subItems: [
                {
                  type: 'paragraph',
                  alignment: 'left',
                  subItems: [
                    {
                      text: 'Updates to contact information must be received from or approved by either the assigned Provider Relations Coordinator or Network Manager',
                      fontsize: '15px',
                    },
                  ],
                },
                {
                  type: 'view',
                  viewType: 'divider',
                  dividerType: 'horizontal',
                },
                {
                  type: 'paragraph',
                  alignment: 'left',
                  subItems: [
                    {
                      text: 'Please submit your update requests to ',
                      fontsize: '15px',
                    },
                    {
                      text: 'ProviderContacts@blueshieldca.com',
                      fontsize: '15px',
                      uri: 'mailto:ProviderContacts@blueshieldca.com',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

