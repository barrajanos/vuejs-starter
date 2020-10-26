<template>
<div>
  <section class="hero is-primary is-medium empyr-hero">
<div class="hero-header navigation-header">
  <div class="container">
        <nav class="level">
          <div class="level-left">
               
                    <a href="#" class="logo">
                      <img
                            src="../assets/img/empyrlogo.svg"
                            alt="Empyr"
                        >
                    </a>

                  
                  <p class="logodesc">{{ $prismic.richTextAsPlain(fields.logo_desc) }}</p>
            
          <b-dropdown class="language-selector" v-model="isPublic" aria-role="list">
              <button class="button is-primary" type="button" slot="trigger">
                  <template>
                      <b-icon icon="earth"></b-icon>
                      {{ nowlanguage[0]+nowlanguage[1] }}
                  </template>
                  <b-icon icon="menu-down"></b-icon>
              </button> 
              <b-dropdown-item @click="getContent('hu')" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>HU - Magyarország</h3>
                      </div>
                  </div>
              </b-dropdown-item>

              <b-dropdown-item @click="getContent('ro')" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>RO - România</h3>
                      </div>
                  </div>
              </b-dropdown-item>

              <b-dropdown-item @click="getContent('sk')" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>SK - Slovenská republika</h3>
                      </div>
                  </div>
              </b-dropdown-item>
                <b-dropdown-item @click="getContent('en-us')" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>EN - English</h3>
                      </div>
                  </div>
              </b-dropdown-item>
          </b-dropdown>
        </div>
      </nav>
    </div>
    </div>
  <div class="hero-body">
    <div class="container">
      
      <div class="levels columns is-vcentered has-text-centered-touch">
        <div class="column is-two-fifths-desktop is-full-tablet title">
            <h1 class="title is-size-2-widescreen is-size-3-desktop is-size-4-tablet is-size-4-mobile">
              <p>{{ $prismic.richTextAsPlain(fields.header_title) }}</p>
            </h1>
            <span class="has-text-centered"><b-button type="is-dark" size="is-medium" icon-left="arrow-down" class="main-button" v-scroll-to="'#ko-scroll'">{{ $prismic.richTextAsPlain(fields.header_button_text) }}</b-button></span>
        </div>
        <div class="column is-half is-hidden-touch">
            <figure class="image header-image">
              <img src="../assets/img/headerimage.png">
            </figure>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="ko is-centered" id="ko-scroll">
<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
        <h3 class="has-text-centered is-size-4-desktop is-size-5-touch">{{ $prismic.richTextAsPlain(fields.ko_header_title) }}
      </h3>
  </div>
</div>
<div class="columns is-centered">
<div class="ko-card column">
  <div class="ko-items">
    <div class="level koitem is-vcentered">
      <div class="lelvel-left">
        <p class="ko-text is-size-4-desktop is-size-5-touch"><prismic-rich-text :field="fields.ko[0].ko_title"/>
        </p>
      </div>
      <div class="level-right">
          <b-field>
              <b-radio-button v-model="radioRoma"
                  native-value="yes"
                  type="is-success"
                  size="is-large">
                  <span><prismic-rich-text :field="fields.ko[0].ko_true_button_text"/></span>
              </b-radio-button>
              <b-radio-button v-model="radioRoma"
                  native-value="no"
                  type="is-danger"
                  size="is-large">
                  <span><prismic-rich-text :field="fields.ko[0].ko_false_text"/></span>
              </b-radio-button>
          </b-field>
      </div>
    </div>
              <div class="error-message mb-4"  v-show="radioRoma === 'no'">
      <div><prismic-rich-text :field="fields.ko[0].ko_error_message"/></div>
      </div>

        <div class="level koitem is-vcentered">
      <div class="lelvel-left">
        <prismic-rich-text :field="fields.ko[1].ko_title"/>
      </div>
      <div class="level-right">
          <b-field>
              <b-radio-button v-model="radioLive"
                  native-value="yes"
                  type="is-success"
                  size="is-large">
                  <span><prismic-rich-text :field="fields.ko[1].ko_true_button_text"/></span>
              </b-radio-button>
              <b-radio-button v-model="radioLive"
                  native-value="no"
                  type="is-danger"
                  size="is-large"
                  >
                  <span><prismic-rich-text :field="fields.ko[1].ko_false_text"/></span>
              </b-radio-button>
          </b-field>
      </div>
    </div>
          <div class="error-message" v-show="radioLive === 'no'">
      <prismic-rich-text :field="fields.ko[1].ko_error_message"/>
      <div><a @click="cardModal($prismic.richTextAsPlain(fields.your_county), $prismic.richTextAsPlain(fields.subscribe), $prismic.richTextAsPlain(fields.thank_you_for_your_subscribe))"><prismic-rich-text :field="fields.subscribe"/></a></div>
      </div>
  </div>
    <hr>
    <div class="columns is-centered has-text-centered">
      <div class="column">
        <div class="good" v-if="radioLive === 'yes' & radioRoma === 'yes' ">
                    <b-button v-if="nowlanguage === 'hu'" type="is-primary" onclick="window.location.href='https://empyr-arthanis.netlify.app/#?&lang=hu'" size="is-large" class="red button-radius mt-10">{{ $prismic.richTextAsPlain(fields.application_button_text) }}</b-button>
                    <b-button v-if="nowlanguage === 'sk'" type="is-primary" onclick="window.location.href='https://empyr-arthanis.netlify.app/#?&lang=sk'" size="is-large" class="red button-radius mt-10">{{ $prismic.richTextAsPlain(fields.application_button_text) }}</b-button>
                    <b-button v-if="nowlanguage === 'ro'" type="is-primary" onclick="window.location.href='https://empyr-arthanis.netlify.app/#?&lang=ro'" size="is-large" class="red button-radius mt-10">{{ $prismic.richTextAsPlain(fields.application_button_text) }}</b-button>
                     <b-button v-if="nowlanguage === 'en-us'" type="is-primary" onclick="window.location.href='https://empyr-arthanis.netlify.app/#?&lang=en-us'" size="is-large" class="red button-radius mt-10">{{ $prismic.richTextAsPlain(fields.application_button_text) }}</b-button>
        </div>
       <div class="notgood" v-else>
                    <b-button type="is-primary" size="is-large" class="red button-radius mt-10" disabled>{{ $prismic.richTextAsPlain(fields.application_button_text) }}</b-button>
        </div>
              <p class="mt-3 how-long"><b-icon class="is-hidden-mobile" icon="clock-time-one-outline" size="is-small"></b-icon><prismic-rich-text :field="fields.how_long_it_takes_"/></p>
              </div>
    </div>
    <script type="text/x-template" id="modal-template">
    <transition name="modal">
     <form action="">
                <div class="modal-card" style="width:400px">
                    <header class="modal-card-head">
                        <p class="modal-card-title"></p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field>E-mail
                            <b-input
                                type="email"
                                :value="email"
                                placeholder=""
                                required>
                            </b-input>
                        </b-field>

                        <b-field>{{$prismic.richTextAsPlain(fields.your_county)}}
                            <b-input
                                type="text"
                                :value="text"
                                placeholder=""
                                required>
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary red button-radius has-text-weight-bold">{{ $prismic.richTextAsPlain(fields.subscribe) }}</button>
                    </footer>
                </div>
            </form>
            </transition>
            </script>
  </div>
</div>
</div>
</section>
<section class="whatis">
  <div class="container">
    <div class="columns is-vcentered reverse-columns">
      <div class="column is-two-fifths">
            <figure class="image contact-image mb-4">
                  <prismic-image :field="fields.project_and_team_image"/>
            </figure>
            <div class="contact">
              <div class="name"><prismic-rich-text :field="fields.team_name"/></div>
              <div class="title"><prismic-rich-text :field="fields.team_desc"/></div>
              <a :href="premail + $prismic.richTextAsPlain(fields.team_email)" subject="Empyr - Information" class="email"><prismic-rich-text :field="fields.team_email"/></a>
            </div>
      </div>
      <div class="column is-one-third">
            <h1 class="section-title-size is-size-3 has-text-weight-bold"><prismic-rich-text :field="fields.about_the_project_title"/></h1>
            <div class="mt-5"><prismic-rich-text :field="fields.about_the_project_description"/></div>
            
      </div>
    </div>
  </div>
</section>
<section class="services">
  <div class="container">
    <h1 class="section-title-size is-size-3 has-text-weight-bold has-text-centered	mb-6"><prismic-rich-text :field="fields.services_headline"/></h1>
      <div class="columns is-offset-one-fifth is-centered mt-6">
      <div class="column is-one-third-desktop is-full-touch">
      <h2>{{ $prismic.richTextAsPlain(fields.services_lead) }}</h2>
      </div>
      <div class="column is-half-desktop is-full-touch">


<div v-for="(item, index) in fields.services" :key="'service-item-' + index" class="service-item mb-6">
  <div class="service-name mb-2">
    
  <prismic-image :field="item.icon"/>
<span>{{ $prismic.richTextAsPlain(item.services_title1) }}</span>
  </div>
  <div class="service-desc mt-4">
{{ $prismic.richTextAsPlain(item.services_description) }}
  </div>
</div>

</div>
</div>

<hr class="mb-5">

<div class="columns is-offset-one-fifth is-centered mt-6 is-full-touch">
      <div class="column is-one-third">
  <h2>{{ $prismic.richTextAsPlain(fields.services_second_headline) }}</h2>
     </div>
      <div class="column is-half is-full-touch">


<div v-for="(item, index) in fields.services_group" :key="'service-item-' + index" class="service-item mb-6">
  <div class="service-name mb-2">
    
  <prismic-image :field="item.icon"/>
<span>{{ $prismic.richTextAsPlain(item.services_title) }}</span>
  </div>
  <div class="service-desc mt-4">
{{ $prismic.richTextAsPlain(item.services_description) }}
  </div>
</div>

  </div>
    </div>
  </div>
</section>
<section class="testimonial">
  <div class="container">
      <h1 class="section-title-size is-size-3 has-text-weight-bold has-text-centered	mb-6"><prismic-rich-text :field="fields.testimonials_title"/></h1>
      <div class="testimonial-items columns">

        <div class="testimonial-item column is-half">
          <div class="card">
              <div class="card-content">
                      <img
                          src="../assets/img/qu.svg"
                          alt="Testimonial icon"
                      >
                   <p class="title mt-5">
    <prismic-rich-text :field="fields.testimonials_items[0].testimonials_lead"/>
    </p>
     <p class="subtitle">
         <prismic-rich-text :field="fields.testimonials_items[0].testimonials_desc"/>
    </p>
              <div class="media levels is-vcentered">
                <div class="level">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/img/test-image.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="name is-4"><prismic-rich-text :field="fields.testimonials_items[0].name"/></p>
                </div>
                </div>
    </div>
  </div>
</div>
        </div>

                       <div class="testimonial-item column is-half">
          <div class="card">
              <div class="card-content">
                      <img
                          src="../assets/img/qu.svg"
                          alt="Testimonial icon"
                      >
                   <p class="title mt-5">
    <prismic-rich-text :field="fields.testimonials_items[1].testimonials_lead"/>
    </p>
     <p class="subtitle">
         <prismic-rich-text :field="fields.testimonials_items[1].testimonials_desc"/>
    </p>
              <div class="media levels is-vcentered">
                <div class="level">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <prismic-image :field="fields.testimonials_items[1].image"/>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="name is-4"><prismic-rich-text :field="fields.testimonials_items[1].name"/></p>
                </div>
                </div>
    </div>
  </div>
</div>
        </div>
      </div>
  </div>
</section>
<section class="prefooter">
  <div class="container">
<div class="columns">
  <div class="column is-4">
    <h3 class="is-size-5 has-text-weight-bold">{{ $prismic.richTextAsPlain(fields.office_title) }}</h3>
    <p>{{ $prismic.richTextAsPlain(fields.office_desc) }}</p>
    <a href="https://www.google.com/maps/dir//Budapest,+V%C3%A1ci+%C3%BAt+99,+1139/@47.5401294,19.0682121,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4741dbc3bf1ad84f:0xb82a173c4b2f049e!2m2!1d19.0704008!2d47.5401294">
                          <img
                          src="../assets/img/navigation.svg"
                          alt="Direction"
                      >
                      <span>{{ $prismic.richTextAsPlain(fields.office_link) }}</span>
      </a>
  </div>
    <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">{{ $prismic.richTextAsPlain(fields.contact_us_title) }}</h3>
        <p>{{ $prismic.richTextAsPlain(fields.contact_us_desc) }}</p>
    <a href="">
                          <img
                          src="../assets/img/messenger.svg"
                          alt="Send message"
                      >
                      <span>{{ $prismic.richTextAsPlain(fields.contact_messenger_link) }}</span>
      </a>
          <a :href="pretel + $prismic.richTextAsPlain(fields.contact_telephone_link)">
                          <img
                          src="../assets/img/tel.svg"
                          alt="Telephone"
                      >
                      <span>{{ $prismic.richTextAsPlain(fields.contact_telephone_link) }}</span>
      </a>
                <a :href="premail + $prismic.richTextAsPlain(fields.contact_email_link)" subject="Empyr - Information">
                          <img
                          src="../assets/img/email.svg"
                          alt="E-mail"
                      >
                      <span>{{ $prismic.richTextAsPlain(fields.contact_email_link) }}</span>
      </a>
  </div>
    <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">{{ $prismic.richTextAsPlain(fields.logos) }}</h3>
                        <a href="https://www.romaeducationfund.org/" class="mr-5">
                    <img
                          src="../assets/img/romaeducationfund.png"
                          alt="Roma Education Fund"
                      >
        </a>
                <a href="https://veluxfoundations.dk/en" class="mr-5">
                    <img
                          src="../assets/img/velux.png"
                          alt="Velux"
                      >
        </a>
  </div>
</div>
  </div>
</section>
<section class="footer has-text-centered">
  <div class="container">
    <h3 class="mb-5">{{ $prismic.richTextAsPlain(fields.footer_social_media_title) }}</h3>
    <div class="social">
        <a href="https://www.facebook.com/RomaEducationFund/" class="mr-5">
                    <img
                          src="../assets/img/fb.svg"
                          alt="Facebook"
                      >
        </a>
        <a href="https://twitter.com/romaeducation">
                    <img
                          src="../assets/img/twitter.svg"
                          alt="Twitter"
                      >
        </a>
        <a href="https://www.instagram.com/roma_education_fund/" class="ml-5">
                    <img
                          src="../assets/img/instagram.svg"
                          alt="Instagram"
                      >
        </a>
    </div>
    <hr>
    <a @click="alertPrivacy($prismic.richTextAsPlain(fields.privacy_policy_title), $prismic.richTextAsPlain(fields.desc), $prismic.richTextAsPlain(fields.button_text))">{{ $prismic.richTextAsPlain(fields.footer_privacy_policy_link) }}</a>
  </div>
</section>
</div>
</template>



<script>

const ModalForm = {
        props: ['email', 'county'],
        template: "#modal-template"
    }

export default {
  data () {
    return {
      fields: {
        header_title: null,
        logo_desc: null,
        language_selector: null,
        header_button_text: null,
        ko_header_title: null,
        ko: null,
        subscribe: null,
        your_county: null,
        application_button_text: null,
        how_long_it_takes_: null,
        thank_you_for_your_subscribe: null,
        about_the_project_title: null,
        about_the_project_description: null,
        project_and_team_image: null,
        team_name: null,
        team_desc: null,
        team_email: null,
        services_headline: null,
        services_lead: null,
        services: null,
        services_second_headline: null,
        services_group: [],
        testimonials_title: null,
        testimonials_items: null,
        office_title: null,
        office_desc: null,
        office_link: null,
        contact_us_title: null,
        contact_us_desc: null,
        contact_messenger_link: null,
        contact_telephone_link: null,
        contact_email_link: null,
        logos: null,
        footer_social_media_title: null,
        footer_privacy_policy_link: null,
      },
      nowlanguage: 'sokk',
      radioRoma: '',
      radioLive: '',
      premail: 'mailto:',
      pretel: 'tel:',
    };
  },
  methods: {
    getContent (language) {
      this.$prismic.client.getSingle('landing_layout', { lang : language })
        .then((document) => {
          this.fields.header_title = document.data.header_title;
          this.fields.logo_desc = document.data.logo_desc;
          this.fields.language_selector = document.data.language_selector;
          this.fields.header_button_text = document.data.header_button_text;
          this.fields.ko_header_title = document.data.ko_header_title;
          this.fields.ko = document.data.ko;
          this.fields.subscribe = document.data.subscribe;
          this.fields.your_county = document.data.your_county;
          this.fields.application_button_text = document.data.application_button_text;
          this.fields.how_long_it_takes_ = document.data.how_long_it_takes_;
          this.fields.thank_you_for_your_subscribe = document.data.thank_you_for_your_subscribe;
          this.fields.about_the_project_title = document.data.about_the_project_title;
          this.fields.about_the_project_description = document.data.about_the_project_description;
          this.fields.project_and_team_image = document.data.project_and_team_image;
          this.fields.team_name = document.data.team_name;
          this.fields.team_desc = document.data.team_desc;
          this.fields.team_email = document.data.team_email;
          this.fields.services_headline = document.data.services_headline;
          this.fields.services_lead = document.data.services_lead;
          this.fields.services = document.data.services;
          this.fields.services_second_headline = document.data.services_second_headline;
          this.fields.services_group = document.data.services_group;
          this.fields.testimonials_title = document.data.testimonials_title;
          this.fields.testimonials_items = document.data.testimonials_items;
          this.fields.office_title = document.data.office_title;
          this.fields.office_desc = document.data.office_desc;
          this.fields.office_link = document.data.office_link;
          this.fields.contact_us_title = document.data.contact_us_title;
          this.fields.contact_us_desc = document.data.contact_us_desc;
          this.fields.contact_messenger_link = document.data.contact_messenger_link;
          this.fields.contact_telephone_link = document.data.contact_telephone_link;
          this.fields.contact_email_link = document.data.contact_email_link;
          this.fields.footer_social_media_title = document.data.footer_social_media_title;
          this.fields.footer_privacy_policy_link = document.data.footer_privacy_policy_link;
          this.fields.logos = document.data.logos;
          this.nowlanguage = document.lang;
        })
        this.$prismic.client.getSingle('privacy_policy', { lang : language })
        .then((document) => {
          this.fields.privacy_policy_title = document.data.privacy_policy_title;
          this.fields.desc = document.data.desc;
          this.fields.name = document.data.name;
          this.fields.position = document.data.position;
          this.fields.e_mail = document.data.e_mail;
          this.fields.button_text = document.data.button_text;
          this.fields.person_image = document.data.person_image;
        })
    },
  alertPrivacy(privacy_policy_title, desc, button_text) {
                this.$buefy.dialog.alert(
                {
                    title: privacy_policy_title,
                    message: desc,
                    confirmText: button_text
                })
            },
  cardModal(your_county, subscribe, thank_you_for_your_subscribe) {
                this.$buefy.modal.open({
                    parent: this,
                    component: ModalForm,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true,
                })
            }
        },
  created () {
    this.getContent();
  }
};


</script>