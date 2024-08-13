import Swal from 'sweetalert2';

export const showAlert = () => {
  Swal.fire({
    title: 'Website Under Maintenance',
    html: `
      <p className="text-xl text-gray-800 font-bold tracking-wider">Our Website is currently under maintenance.</p>
      <p className="text-xl text-gray-600 font-bold tracking-wider">Please call us at +44 7984 373759</p>
      <p className="text-xl text-gray-800 font-bold tracking-wider">Thank You</p>
    `,
    confirmButtonText: 'Got it!',
    imageWidth: 300,
    imageHeight: 200,
    customClass: {
      htmlContainer: 'text-center', 
      title: 'text-3xl font-bold text-primary tracking-wider',  
    },
  });
};
