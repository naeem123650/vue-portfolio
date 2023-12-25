
import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const personalInfo = ref([]);
const experienceInfo = ref([]);
const educationInfo = ref([]);
const skillsInfo = ref([]);
const testimonialInfo = ref([]);
const isLoading = ref(true);
const siteUnderMaintenace = ref(false);


async function fetchPersonalInfo() {
  try {
    const { data: users, error } = await supabase
      .from('user')
      .select(`
          name,
          technologies,
          social_links,
          is_active, 
          in_maintenance,
          experience ( user_id, details, is_active, title ),
          education ( user_id, details, is_active, title ),
          skill ( user_id, details, is_active, title ),
          testimonials ( user_id, details, is_active, title, subtitle )
        `)
      .order('id')

    if (error) {
      console.error('error', error)
      return
    }

    if (!users || users.length === 0) {
      console.warn('no data found..');
      personalInfo.value = []
      return;
    }

    if (!users[0].in_maintenance) {
      users.forEach((user) => {
        const usersInfo = {
          name: user.name,
          technologies: user.technologies,
          social_links: user.social_links,
          is_active: user.is_active
        };

        personalInfo.value = usersInfo;
        experienceInfo.value = user.experience[0];
        educationInfo.value = user.education[0];
        skillsInfo.value = user.skill[0];
        testimonialInfo.value = user.testimonials[0];
      })

      isLoading.value = false;
    }

    siteUnderMaintenace.value = users[0].in_maintenance;

  } catch (err) {
    console.error('Error retrieving data from db', err);
    isLoading.value = true;
    siteUnderMaintenace.value = true;
  }
}

export {
  personalInfo,
  experienceInfo,
  educationInfo,
  skillsInfo,
  testimonialInfo,
  isLoading,
  siteUnderMaintenace,
  fetchPersonalInfo,
}