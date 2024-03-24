import React from 'react';
import './HowItWorks.css';

const cardsData = [
    {
        title: 'Identify Symptoms',
        description: 'Start by identifying your symptoms through our intuitive questionnaire.',
        additionalInfo:'additional info?',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="134 0 115 150" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="f9e6a80913"><path d="M 134.652344 20 L 240.382812 20 L 240.382812 65.25 L 134.652344 65.25 Z M 134.652344 20 " clip-rule="nonzero"/></clipPath></defs><path fill="#040606" d="M 195.402344 24.636719 C 188.609375 24.636719 183.078125 19.117188 183.078125 12.324219 C 183.078125 5.511719 188.609375 -0.0078125 195.402344 -0.0078125 C 202.238281 -0.0078125 207.757812 5.511719 207.757812 12.324219 C 207.757812 19.117188 202.238281 24.636719 195.402344 24.636719 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#f9e6a80913)"><path fill="#040606" d="M 151.804688 59.382812 L 139.289062 32.882812 L 168.746094 32.882812 C 169.289062 32.882812 170.191406 33.492188 170.464844 34.195312 L 179.679688 53.703125 C 174.226562 53.703125 169.347656 53.703125 169.347656 53.703125 C 166.183594 53.703125 163.414062 56.253906 163.40625 59.410156 C 163.40625 59.851562 163.460938 60.28125 163.566406 60.695312 L 153.519531 60.695312 C 152.976562 60.695312 152.074219 60.085938 151.804688 59.371094 Z M 207.035156 65.25 L 240.382812 65.25 C 240.382812 65.25 235.71875 43.5625 224.164062 26.507812 C 220.917969 21.441406 212.441406 16.8125 206.179688 23.914062 C 200.179688 30.707031 194.363281 53.710938 194.363281 53.710938 C 194.363281 53.710938 189.808594 53.710938 184.589844 53.710938 L 174.574219 32.515625 C 173.636719 30.191406 171.148438 28.441406 168.746094 28.441406 L 138.753906 28.441406 C 137.320312 28.441406 136.082031 29.066406 135.339844 30.144531 C 134.558594 31.269531 134.4375 32.75 135 34.195312 L 147.683594 61.050781 C 148.621094 63.382812 151.117188 65.15625 153.519531 65.15625 L 203.4375 65.25 L 216.035156 37.71875 C 216.421875 36.890625 217.378906 36.535156 218.214844 36.910156 C 219.03125 37.285156 219.394531 38.25 219.011719 39.074219 L 207.035156 65.25 " fill-opacity="1" fill-rule="nonzero"/></g></svg>'
    },
    {
        title: 'System Analysis',
        description: 'Our advanced algorithms analyze the input data, categorizing the severity of your condition.',
        additionalInfo:'additional info?',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="134 0 115 150" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="da1aa205e0"><path d="M 149.800781 0 L 225.550781 0 L 225.550781 76.5 L 149.800781 76.5 Z M 149.800781 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#da1aa205e0)"><path fill="#000000" d="M 221.058594 54.679688 C 220.402344 54.679688 219.871094 54.8125 219.34375 55.074219 C 216.574219 52.050781 213.933594 49.027344 211.164062 46.003906 C 210.898438 45.742188 210.503906 45.609375 210.238281 45.609375 C 202.980469 45.609375 195.726562 45.742188 188.46875 45.742188 L 188.46875 42.191406 L 213.539062 42.324219 C 213.933594 42.324219 214.332031 42.191406 214.460938 41.929688 L 219.34375 36.542969 C 219.871094 36.804688 220.402344 36.9375 221.058594 36.9375 C 223.433594 36.9375 225.28125 35.09375 225.28125 32.730469 C 225.28125 30.363281 223.433594 28.523438 221.058594 28.523438 C 218.683594 28.523438 216.835938 30.363281 216.835938 32.730469 C 216.835938 33.519531 217.101562 34.175781 217.367188 34.699219 L 212.746094 39.695312 L 188.203125 39.5625 L 188.203125 34.4375 L 207.996094 34.570312 C 208.390625 34.570312 208.789062 34.4375 208.921875 34.175781 L 217.101562 25.105469 C 217.628906 25.367188 218.15625 25.5 218.816406 25.5 C 221.191406 25.5 223.039062 23.660156 223.039062 21.292969 C 223.039062 18.929688 221.191406 17.085938 218.816406 17.085938 C 216.441406 17.085938 214.59375 18.929688 214.59375 21.292969 C 214.59375 22.082031 214.859375 22.738281 215.121094 23.398438 L 207.335938 32.070312 L 188.335938 31.808594 L 188.335938 26.550781 L 202.585938 26.550781 C 202.980469 26.550781 203.378906 26.421875 203.511719 26.15625 L 207.203125 22.214844 C 209.449219 19.714844 211.691406 17.351562 213.800781 14.851562 C 214.199219 14.984375 214.460938 14.984375 214.859375 14.984375 C 217.234375 14.984375 219.082031 13.144531 219.082031 10.777344 C 219.082031 8.414062 217.234375 6.570312 214.859375 6.570312 C 212.484375 6.570312 210.636719 8.414062 210.636719 10.777344 C 210.636719 11.699219 211.03125 12.617188 211.558594 13.277344 C 209.449219 15.640625 207.335938 18.007812 205.09375 20.375 L 202.058594 23.921875 L 188.335938 23.921875 L 188.335938 22.214844 L 192.820312 22.214844 C 193.21875 22.214844 193.613281 22.082031 193.746094 21.820312 L 197.441406 17.875 C 199.683594 15.378906 201.925781 13.011719 204.171875 10.515625 C 204.566406 10.648438 204.828125 10.648438 205.226562 10.648438 C 207.601562 10.648438 209.449219 8.808594 209.449219 6.441406 C 209.449219 4.074219 207.601562 2.234375 205.226562 2.234375 C 202.851562 2.234375 201.003906 4.074219 201.003906 6.441406 C 201.003906 7.359375 201.398438 8.28125 201.925781 8.9375 C 199.816406 11.304688 197.703125 13.671875 195.460938 16.035156 L 192.160156 19.585938 L 188.203125 19.585938 L 188.203125 14.984375 C 189.65625 13.40625 190.972656 11.960938 192.292969 10.382812 C 192.691406 10.515625 192.953125 10.515625 193.351562 10.515625 C 195.726562 10.515625 197.570312 8.675781 197.570312 6.308594 C 197.570312 3.941406 195.726562 2.101562 193.351562 2.101562 C 190.972656 2.101562 189.128906 3.941406 189.128906 6.308594 C 189.128906 7.230469 189.523438 8.148438 190.050781 8.808594 C 189.390625 9.464844 188.730469 10.253906 188.070312 10.910156 L 188.070312 1.3125 C 188.070312 0.527344 187.542969 0 186.75 0 L 183.847656 0 C 182.132812 0 180.683594 1.445312 180.683594 3.15625 L 180.683594 9.464844 C 177.382812 10.121094 174.214844 11.4375 171.445312 13.277344 L 166.957031 8.808594 C 166.300781 8.148438 165.507812 7.886719 164.714844 7.886719 C 163.792969 7.886719 163 8.28125 162.472656 8.808594 L 158.382812 12.882812 C 157.722656 13.539062 157.457031 14.328125 157.457031 15.117188 C 157.457031 16.035156 157.855469 16.824219 158.382812 17.351562 L 162.867188 21.820312 C 161.019531 24.710938 159.699219 27.734375 159.042969 31.019531 L 152.972656 31.019531 C 151.257812 31.019531 149.804688 32.464844 149.804688 34.175781 L 149.804688 39.828125 C 149.804688 41.535156 151.257812 42.980469 152.972656 42.980469 L 159.304688 42.980469 C 159.964844 46.269531 161.285156 49.421875 163.132812 52.183594 L 158.644531 56.652344 C 157.984375 57.308594 157.722656 58.097656 157.722656 58.886719 C 157.722656 59.675781 158.117188 60.59375 158.644531 61.121094 L 162.734375 65.195312 C 163.394531 65.851562 164.1875 66.117188 164.980469 66.117188 C 165.902344 66.117188 166.695312 65.722656 167.222656 65.195312 L 171.710938 60.726562 C 174.613281 62.566406 177.648438 63.882812 180.945312 64.539062 L 180.945312 70.847656 C 180.945312 72.558594 182.398438 74.003906 184.113281 74.003906 L 187.015625 74.003906 C 187.808594 74.003906 188.335938 73.476562 188.335938 72.6875 L 188.335938 61.515625 C 189.785156 61.515625 191.238281 61.515625 192.691406 61.515625 L 200.476562 70.191406 C 200.078125 70.847656 199.949219 71.503906 199.949219 72.292969 C 199.949219 74.660156 201.792969 76.5 204.171875 76.5 C 206.546875 76.5 208.390625 74.660156 208.390625 72.292969 C 208.390625 69.929688 206.546875 68.085938 204.171875 68.085938 C 203.511719 68.085938 202.980469 68.21875 202.453125 68.480469 L 194.273438 59.414062 C 194.007812 59.148438 193.613281 59.019531 193.351562 59.019531 C 191.765625 59.019531 190.050781 59.019531 188.46875 59.019531 L 188.46875 57.703125 C 194.140625 57.703125 199.816406 57.703125 205.621094 57.703125 L 213.40625 66.378906 C 213.011719 67.035156 212.878906 67.691406 212.878906 68.480469 C 212.878906 70.847656 214.726562 72.6875 217.101562 72.6875 C 219.476562 72.6875 221.324219 70.847656 221.324219 68.480469 C 221.324219 66.117188 219.476562 64.277344 217.101562 64.277344 C 216.441406 64.277344 215.914062 64.40625 215.386719 64.671875 L 207.203125 55.601562 C 206.941406 55.335938 206.546875 55.207031 206.28125 55.207031 C 200.34375 55.207031 194.539062 55.207031 188.597656 55.207031 L 188.597656 48.503906 C 195.726562 48.503906 202.71875 48.371094 209.84375 48.371094 C 212.484375 51.261719 214.992188 54.023438 217.628906 56.914062 C 217.234375 57.570312 217.101562 58.230469 217.101562 59.019531 C 217.101562 61.382812 218.949219 63.222656 221.324219 63.222656 C 223.699219 63.222656 225.546875 61.382812 225.546875 59.019531 C 225.28125 56.519531 223.433594 54.679688 221.058594 54.679688 Z M 221.191406 31.019531 C 222.117188 31.019531 222.777344 31.679688 222.777344 32.597656 C 222.777344 33.519531 222.117188 34.175781 221.191406 34.175781 C 220.269531 34.175781 219.609375 33.519531 219.609375 32.597656 C 219.609375 31.679688 220.269531 31.019531 221.191406 31.019531 Z M 219.082031 19.714844 C 220.003906 19.714844 220.664062 20.375 220.664062 21.292969 C 220.664062 22.214844 220.003906 22.871094 219.082031 22.871094 C 218.15625 22.871094 217.496094 22.214844 217.496094 21.292969 C 217.496094 20.375 218.15625 19.714844 219.082031 19.714844 Z M 214.992188 9.199219 C 215.914062 9.199219 216.574219 9.859375 216.574219 10.777344 C 216.574219 11.699219 215.914062 12.355469 214.992188 12.355469 C 214.066406 12.355469 213.40625 11.699219 213.40625 10.777344 C 213.40625 9.859375 214.066406 9.199219 214.992188 9.199219 Z M 205.226562 4.863281 C 206.148438 4.863281 206.808594 5.519531 206.808594 6.441406 C 206.808594 7.359375 206.148438 8.019531 205.226562 8.019531 C 204.300781 8.019531 203.640625 7.359375 203.640625 6.441406 C 203.640625 5.519531 204.433594 4.863281 205.226562 4.863281 Z M 205.753906 72.558594 C 205.753906 73.476562 205.09375 74.132812 204.171875 74.132812 C 203.246094 74.132812 202.585938 73.476562 202.585938 72.558594 C 202.585938 71.636719 203.246094 70.980469 204.171875 70.980469 C 205.09375 70.980469 205.753906 71.636719 205.753906 72.558594 Z M 218.554688 68.21875 C 218.554688 69.140625 217.894531 69.796875 216.96875 69.796875 C 216.046875 69.796875 215.386719 69.140625 215.386719 68.21875 C 215.386719 67.300781 216.046875 66.640625 216.96875 66.640625 C 217.894531 66.640625 218.554688 67.429688 218.554688 68.21875 Z M 185.695312 56.785156 C 184.640625 56.652344 183.585938 56.519531 182.53125 56.257812 C 180.417969 55.730469 178.4375 54.941406 176.589844 53.761719 C 174.085938 52.183594 171.839844 50.078125 170.257812 47.449219 C 169.070312 45.609375 168.277344 43.640625 167.75 41.535156 C 167.355469 40.089844 167.222656 38.644531 167.222656 37.066406 C 167.222656 35.488281 167.355469 34.042969 167.75 32.597656 C 168.277344 30.496094 169.070312 28.523438 170.257812 26.683594 C 171.839844 24.1875 173.953125 21.949219 176.589844 20.375 C 178.4375 19.191406 180.417969 18.402344 182.53125 17.875 C 183.585938 17.613281 184.640625 17.480469 185.695312 17.351562 Z M 193.613281 4.863281 C 194.539062 4.863281 195.195312 5.519531 195.195312 6.441406 C 195.195312 7.359375 194.539062 8.019531 193.613281 8.019531 C 192.691406 8.019531 192.03125 7.359375 192.03125 6.441406 C 192.03125 5.519531 192.820312 4.863281 193.613281 4.863281 Z M 185.695312 71.769531 L 184.113281 71.769531 C 183.847656 71.769531 183.585938 71.503906 183.585938 71.242188 L 183.585938 63.882812 C 183.585938 63.222656 183.058594 62.699219 182.53125 62.566406 C 178.835938 61.910156 175.402344 60.464844 172.238281 58.359375 C 171.972656 58.230469 171.710938 58.097656 171.445312 58.097656 C 171.050781 58.097656 170.785156 58.230469 170.519531 58.492188 L 165.242188 63.75 C 165.109375 63.882812 164.980469 63.882812 164.847656 63.882812 C 164.714844 63.882812 164.582031 63.882812 164.453125 63.75 L 160.359375 59.675781 C 160.097656 59.414062 160.097656 59.148438 160.359375 58.886719 L 165.640625 53.628906 C 166.035156 53.234375 166.167969 52.445312 165.769531 51.921875 C 163.660156 48.765625 162.207031 45.347656 161.546875 41.667969 C 161.417969 41.011719 160.890625 40.617188 160.230469 40.617188 L 152.972656 40.617188 C 152.707031 40.617188 152.445312 40.351562 152.445312 40.089844 L 152.445312 34.4375 C 152.445312 34.175781 152.707031 33.914062 152.972656 33.914062 L 160.359375 33.914062 C 161.019531 33.914062 161.546875 33.519531 161.679688 32.859375 C 162.339844 29.179688 163.792969 25.761719 165.902344 22.609375 C 166.300781 22.082031 166.167969 21.425781 165.769531 20.898438 L 160.492188 15.640625 C 160.230469 15.378906 160.230469 15.117188 160.492188 14.851562 L 164.582031 10.777344 C 164.847656 10.515625 165.109375 10.515625 165.375 10.777344 L 170.652344 16.035156 C 171.050781 16.429688 171.839844 16.5625 172.367188 16.167969 C 175.402344 14.0625 178.835938 12.617188 182.660156 11.960938 C 183.320312 11.828125 183.71875 11.304688 183.71875 10.648438 L 183.71875 3.15625 C 183.71875 2.890625 183.980469 2.628906 184.246094 2.628906 L 185.828125 2.628906 L 185.828125 14.984375 C 184.507812 15.117188 183.320312 15.246094 182.132812 15.511719 C 179.757812 16.035156 177.515625 16.957031 175.402344 18.269531 C 172.5 20.109375 170.125 22.476562 168.277344 25.367188 C 166.957031 27.472656 166.035156 29.707031 165.507812 32.070312 C 165.109375 33.648438 164.980469 35.359375 164.980469 37.066406 C 164.980469 38.777344 165.242188 40.484375 165.507812 42.0625 C 166.035156 44.429688 166.957031 46.664062 168.277344 48.765625 C 170.125 51.65625 172.5 54.15625 175.402344 55.863281 C 177.515625 57.179688 179.757812 58.097656 182.132812 58.625 C 183.320312 58.886719 184.640625 59.019531 185.828125 59.148438 L 185.828125 71.769531 Z M 221.058594 60.332031 C 220.136719 60.332031 219.476562 59.675781 219.476562 58.753906 C 219.476562 57.835938 220.136719 57.179688 221.058594 57.179688 C 221.984375 57.179688 222.644531 57.835938 222.644531 58.753906 C 222.644531 59.675781 221.984375 60.332031 221.058594 60.332031 Z M 221.058594 60.332031 " fill-opacity="1" fill-rule="nonzero"/></g></svg>'
    },
    {
        title: 'Appointment Scheduling',
        description: 'Choose from available appointment slots based on the urgency of your symptoms.',
        additionalInfo:'additional info?',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="134 0 115 150" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c5270b0756"><path d="M 146.773438 0 L 228.523438 0 L 228.523438 74 L 146.773438 74 Z M 146.773438 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c5270b0756)"><path fill="#010101" d="M 218.621094 36.28125 L 218.621094 12.261719 C 218.621094 10.390625 217.886719 8.632812 216.554688 7.308594 C 215.238281 6.003906 213.421875 5.257812 211.5625 5.257812 L 202.195312 5.257812 L 202.195312 1.597656 C 202.195312 0.828125 201.5625 0.199219 200.785156 0.199219 C 200.007812 0.199219 199.375 0.828125 199.375 1.597656 L 199.375 5.257812 L 184.121094 5.257812 L 184.121094 1.597656 C 184.121094 0.828125 183.492188 0.199219 182.714844 0.199219 C 181.933594 0.199219 181.304688 0.828125 181.304688 1.597656 L 181.304688 5.257812 L 166.050781 5.257812 L 166.050781 1.597656 C 166.050781 0.828125 165.421875 0.199219 164.640625 0.199219 C 163.863281 0.199219 163.234375 0.828125 163.234375 1.597656 L 163.234375 5.257812 L 153.863281 5.257812 C 152.003906 5.257812 150.1875 6.003906 148.875 7.308594 C 147.539062 8.632812 146.804688 10.390625 146.804688 12.261719 L 146.804688 54.308594 C 146.804688 56.179688 147.539062 57.941406 148.875 59.265625 C 150.1875 60.566406 152.003906 61.316406 153.863281 61.316406 L 189.152344 61.316406 C 192.210938 68.695312 199.527344 73.910156 208.050781 73.910156 C 219.320312 73.910156 228.488281 64.808594 228.488281 53.617188 C 228.488281 46.269531 224.523438 39.84375 218.621094 36.28125 Z M 208.050781 33.324219 C 205.710938 33.324219 203.46875 33.738281 201.371094 34.457031 L 201.371094 25.808594 L 215.800781 25.808594 L 215.800781 34.847656 C 213.410156 33.871094 210.792969 33.324219 208.050781 33.324219 Z M 192.25 40.761719 L 184.121094 40.761719 L 184.121094 25.808594 L 198.554688 25.808594 L 198.554688 35.664062 C 196.125 36.933594 193.980469 38.671875 192.25 40.761719 Z M 166.875 40.761719 L 166.875 25.808594 L 181.304688 25.808594 L 181.304688 40.761719 Z M 181.304688 43.5625 L 181.304688 58.515625 L 166.875 58.515625 L 166.875 43.5625 Z M 149.625 25.808594 L 164.054688 25.808594 L 164.054688 40.761719 L 149.625 40.761719 Z M 150.867188 9.289062 C 151.65625 8.503906 152.746094 8.054688 153.863281 8.054688 L 163.234375 8.054688 L 163.234375 11.496094 C 163.234375 12.269531 163.863281 12.898438 164.640625 12.898438 C 165.421875 12.898438 166.050781 12.269531 166.050781 11.496094 L 166.050781 8.054688 L 181.304688 8.054688 L 181.304688 11.496094 C 181.304688 12.269531 181.933594 12.898438 182.714844 12.898438 C 183.492188 12.898438 184.121094 12.269531 184.121094 11.496094 L 184.121094 8.054688 L 199.375 8.054688 L 199.375 11.496094 C 199.375 12.269531 200.007812 12.898438 200.785156 12.898438 C 201.5625 12.898438 202.195312 12.269531 202.195312 11.496094 L 202.195312 8.054688 L 211.5625 8.054688 C 212.679688 8.054688 213.769531 8.503906 214.5625 9.289062 C 215.359375 10.082031 215.800781 11.140625 215.800781 12.261719 L 215.800781 23.007812 L 149.625 23.007812 L 149.625 12.261719 C 149.625 11.140625 150.066406 10.082031 150.867188 9.289062 Z M 150.867188 57.285156 C 150.066406 56.488281 149.625 55.429688 149.625 54.308594 L 149.625 43.558594 L 164.054688 43.558594 L 164.054688 58.515625 L 153.863281 58.515625 C 152.746094 58.515625 151.652344 58.066406 150.867188 57.285156 Z M 184.121094 58.515625 L 184.121094 43.5625 L 190.320312 43.5625 C 188.609375 46.53125 187.613281 49.957031 187.613281 53.617188 C 187.613281 55.308594 187.84375 56.945312 188.238281 58.515625 Z M 208.050781 71.109375 C 198.335938 71.109375 190.433594 63.265625 190.433594 53.617188 C 190.433594 43.96875 198.335938 36.121094 208.050781 36.121094 C 217.765625 36.121094 225.667969 43.96875 225.667969 53.617188 C 225.667969 63.265625 217.765625 71.109375 208.050781 71.109375 Z M 208.050781 71.109375 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#010101" d="M 214.621094 52.003906 L 209.460938 52.003906 L 209.460938 44.042969 C 209.460938 43.269531 208.828125 42.640625 208.050781 42.640625 C 207.273438 42.640625 206.640625 43.269531 206.640625 44.042969 L 206.640625 53.40625 C 206.640625 54.179688 207.273438 54.804688 208.050781 54.804688 L 214.621094 54.804688 C 215.398438 54.804688 216.027344 54.179688 216.027344 53.40625 C 216.027344 52.632812 215.398438 52.003906 214.621094 52.003906 Z M 214.621094 52.003906 " fill-opacity="1" fill-rule="nonzero"/></svg>'
    },
    {
        title: 'Healthcare Consultation',
        description: 'Attend your scheduled healthcare appointment for professional care and advice.',
        additionalInfo:'additional info?',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="134 0 115 150" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="df05053747"><path d="M 150.421875 0 L 223 0 L 223 84 L 150.421875 84 Z M 150.421875 0 " clip-rule="nonzero"/></clipPath></defs><path fill="#000000" d="M 171.632812 62.175781 L 171.890625 67.167969 C 172.636719 63.90625 172.789062 61.839844 172.785156 60.667969 C 172.785156 59.789062 172.707031 59.132812 172.609375 58.648438 L 161.699219 58.648438 C 161.601562 59.125 161.523438 59.78125 161.523438 60.664062 C 161.519531 61.839844 161.671875 63.90625 162.417969 67.167969 L 162.675781 62.175781 Z M 171.632812 62.175781 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 164.34375 73.910156 C 164.507812 74.402344 164.679688 74.910156 164.863281 75.4375 L 169.445312 75.4375 C 169.628906 74.910156 169.800781 74.402344 169.964844 73.910156 Z M 164.34375 73.910156 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 171.585938 57.003906 C 171.425781 56.925781 171.011719 56.761719 170.292969 56.636719 C 169.527344 56.503906 168.492188 56.4375 167.21875 56.4375 L 167.078125 56.4375 C 165.675781 56.4375 164.515625 56.523438 163.726562 56.691406 C 162.898438 56.867188 162.511719 57.085938 162.332031 57.242188 C 162.25 57.3125 162.179688 57.386719 162.09375 57.527344 L 172.210938 57.527344 C 172.050781 57.269531 171.960938 57.199219 171.585938 57.003906 Z M 171.585938 57.003906 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#df05053747)"><path fill="#000000" d="M 150.535156 41.800781 C 150.65625 43.714844 151.292969 45.738281 152.539062 47.667969 C 153.941406 49.851562 156.066406 51.941406 159.054688 53.957031 C 159.539062 54.28125 160.089844 54.4375 160.632812 54.4375 C 161.542969 54.4375 162.433594 54.003906 162.980469 53.195312 C 163.851562 51.902344 163.511719 50.148438 162.214844 49.277344 C 159.695312 47.582031 158.171875 45.988281 157.300781 44.628906 C 156.625 43.5625 156.320312 42.652344 156.210938 41.800781 C 156.179688 41.558594 156.164062 41.316406 156.160156 41.082031 C 156.144531 39.652344 156.75 38.1875 157.601562 36.902344 L 157.601562 43.746094 C 157.691406 43.914062 157.785156 44.078125 157.894531 44.25 C 158.839844 45.730469 160.429688 47.222656 162.613281 48.691406 C 164.226562 49.78125 164.65625 51.976562 163.566406 53.585938 C 162.910156 54.5625 161.8125 55.144531 160.632812 55.144531 C 159.929688 55.144531 159.246094 54.933594 158.660156 54.542969 C 157.042969 53.453125 155.671875 52.335938 154.507812 51.179688 C 154.15625 51.609375 153.835938 52.074219 153.550781 52.566406 C 153.484375 52.675781 153.417969 52.78125 153.355469 52.890625 C 152.148438 55.117188 151.632812 57.71875 151.632812 60.664062 C 151.652344 65.644531 153.039062 71.832031 156.125 80.375 C 156.988281 82.757812 159.621094 83.984375 162.007812 83.125 C 164.390625 82.261719 165.625 79.632812 164.757812 77.253906 C 161.847656 69.273438 160.800781 63.84375 160.820312 60.664062 C 160.816406 58.984375 161.085938 57.984375 161.332031 57.457031 C 161.523438 57.050781 161.679688 56.878906 161.871094 56.707031 C 162.152344 56.464844 162.65625 56.195312 163.582031 56.003906 C 164.492188 55.808594 165.746094 55.726562 167.152344 55.730469 C 168.40625 55.726562 169.535156 55.789062 170.410156 55.941406 C 171.070312 56.054688 171.574219 56.214844 171.914062 56.378906 C 172.429688 56.648438 172.597656 56.792969 172.882812 57.269531 C 173.148438 57.753906 173.488281 58.773438 173.488281 60.664062 C 173.507812 63.84375 172.460938 69.273438 169.546875 77.253906 C 168.683594 79.632812 169.917969 82.261719 172.300781 83.125 C 172.816406 83.308594 173.347656 83.398438 173.867188 83.398438 C 175.746094 83.398438 177.507812 82.242188 178.183594 80.375 C 181.269531 71.832031 182.65625 65.648438 182.675781 60.664062 C 182.671875 58.042969 182.269531 55.707031 181.328125 53.644531 C 181.230469 53.425781 181.121094 53.214844 181.011719 53.007812 C 180.335938 51.730469 179.4375 50.613281 178.40625 49.738281 C 177.859375 49.273438 177.289062 48.886719 176.707031 48.550781 L 176.707031 37.957031 C 176.957031 38.160156 177.214844 38.367188 177.488281 38.574219 C 177.960938 38.929688 178.464844 39.285156 179.007812 39.636719 L 178.726562 40.269531 C 178.570312 40.613281 178.5625 40.996094 178.695312 41.351562 C 178.832031 41.703125 179.097656 41.980469 179.445312 42.132812 L 180.894531 42.773438 C 181.128906 43.964844 181.417969 45.097656 181.773438 46.132812 C 182.296875 47.667969 182.953125 48.992188 183.785156 49.984375 C 184.609375 50.976562 185.664062 51.65625 186.894531 51.71875 C 186.953125 51.71875 187.007812 51.722656 187.0625 51.722656 C 187.078125 51.722656 187.09375 51.722656 187.109375 51.722656 C 188.394531 51.722656 189.300781 50.84375 189.6875 49.859375 C 190.109375 48.859375 190.210938 47.683594 190.214844 46.589844 C 190.214844 45.453125 190.089844 44.40625 190.003906 43.8125 C 192.039062 44.171875 194.257812 44.378906 196.683594 44.378906 C 196.707031 44.378906 196.726562 44.378906 196.746094 44.378906 C 197.042969 44.378906 197.339844 44.375 197.636719 44.371094 C 198.273438 44.359375 198.855469 44.136719 199.320312 43.773438 C 199.023438 50.203125 197.589844 60.203125 199.316406 62.671875 C 199.878906 63.476562 201.949219 63.972656 204.628906 64.203125 L 204.160156 78.632812 C 204.078125 81.066406 205.992188 83.105469 208.429688 83.183594 C 208.476562 83.183594 208.527344 83.183594 208.574219 83.183594 C 210.949219 83.183594 212.90625 81.304688 212.984375 78.921875 L 213.46875 64.136719 C 218.175781 63.734375 222.265625 62.789062 222.414062 61.449219 C 224.582031 41.78125 219.105469 18.445312 208.617188 17.804688 C 204.363281 17.546875 203.59375 18.160156 202.671875 18.863281 C 202.417969 19.058594 202.183594 19.304688 201.964844 19.59375 C 202.132812 18.605469 202.269531 17.644531 202.378906 16.726562 C 203.296875 16.800781 204.242188 16.714844 205.179688 16.453125 C 209.402344 15.261719 211.859375 10.878906 210.667969 6.664062 C 209.476562 2.445312 205.085938 -0.0078125 200.863281 1.183594 C 196.640625 2.371094 194.183594 6.753906 195.375 10.972656 C 195.765625 12.355469 196.503906 13.546875 197.464844 14.484375 C 197.363281 18.277344 196.894531 23.375 195.390625 28.082031 C 195.316406 28.089844 195.242188 28.09375 195.167969 28.09375 C 194.554688 28.089844 193.785156 27.929688 192.726562 27.320312 C 192.128906 26.976562 191.449219 26.480469 190.699219 25.804688 C 190.777344 25.554688 190.714844 25.273438 190.511719 25.082031 L 190.144531 24.734375 C 190.273438 24.113281 189.65625 22.984375 188.585938 21.980469 C 187.519531 20.976562 186.351562 20.425781 185.738281 20.589844 L 185.371094 20.246094 C 185.085938 19.976562 184.636719 19.992188 184.371094 20.273438 L 183.320312 21.386719 C 183.054688 21.671875 183.066406 22.117188 183.351562 22.382812 L 183.480469 22.503906 C 182.460938 23.515625 181.753906 25.039062 181.230469 26.824219 C 180.664062 28.789062 180.339844 31.117188 180.238281 33.550781 C 179.082031 32.59375 178.257812 31.679688 177.71875 30.988281 C 177.402344 30.582031 177.179688 30.253906 177.046875 30.039062 C 176.980469 29.9375 176.9375 29.859375 176.914062 29.820312 C 176.902344 29.800781 176.898438 29.789062 176.894531 29.785156 C 176.628906 29.273438 176.226562 28.878906 175.753906 28.621094 C 175.277344 28.210938 174.65625 27.960938 173.976562 27.960938 L 160.332031 27.960938 C 159.996094 27.960938 159.679688 28.023438 159.382812 28.132812 C 158.855469 28.148438 158.328125 28.308594 157.859375 28.632812 C 157.765625 28.699219 156.789062 29.382812 155.550781 30.59375 C 154.316406 31.808594 152.8125 33.542969 151.734375 35.824219 C 151.023438 37.339844 150.511719 39.117188 150.511719 41.082031 C 150.507812 41.320312 150.519531 41.5625 150.535156 41.800781 Z M 188.386719 49.308594 C 188.054688 50.003906 187.753906 50.289062 187.0625 50.3125 C 187.03125 50.3125 186.996094 50.308594 186.964844 50.308594 C 186.230469 50.269531 185.546875 49.878906 184.871094 49.078125 C 183.863281 47.90625 183.050781 45.886719 182.492188 43.480469 L 187.515625 45.707031 C 187.699219 45.785156 187.890625 45.828125 188.089844 45.828125 C 188.332031 45.828125 188.566406 45.761719 188.773438 45.648438 C 188.789062 45.949219 188.804688 46.265625 188.804688 46.589844 C 188.804688 47.582031 188.6875 48.617188 188.386719 49.308594 Z M 204.277344 52.089844 L 203.855469 50.621094 L 209.832031 49.160156 L 210.070312 50.160156 Z M 198.839844 15.5625 C 199.503906 15.972656 200.226562 16.28125 200.984375 16.484375 C 200.65625 19.230469 200.097656 22.363281 199.144531 25.410156 C 198.609375 26.140625 198.011719 26.789062 197.417969 27.238281 C 197.289062 27.335938 197.164062 27.417969 197.042969 27.496094 C 198.238281 23.324219 198.695312 19.019531 198.839844 15.5625 Z M 184.503906 23.46875 L 184.8125 23.753906 C 183.71875 24.789062 183.625 26.507812 184.625 27.652344 C 186.414062 29.699219 188.144531 31.1875 189.898438 32.203125 C 190.933594 32.804688 191.988281 33.230469 193.039062 33.476562 C 192.757812 33.953125 192.460938 34.417969 192.144531 34.867188 C 192.386719 34.875 192.632812 34.886719 192.863281 34.886719 C 193.203125 34.886719 193.53125 34.875 193.851562 34.859375 C 194.089844 34.484375 194.316406 34.101562 194.535156 33.710938 C 194.71875 33.722656 194.898438 33.730469 195.082031 33.730469 C 194.816406 34.078125 194.542969 34.417969 194.257812 34.742188 C 194.230469 34.773438 194.199219 34.804688 194.171875 34.835938 C 194.894531 34.785156 195.574219 34.699219 196.210938 34.566406 C 196.457031 34.234375 196.699219 33.898438 196.925781 33.554688 C 197.792969 33.375 198.597656 33.074219 199.332031 32.691406 C 199.324219 32.933594 199.316406 33.171875 199.308594 33.410156 C 200.53125 32.6875 201.492188 31.71875 202.242188 30.445312 C 203.570312 28.210938 203.816406 25.382812 203.796875 24.480469 C 203.796875 24.382812 203.796875 24.328125 203.796875 24.3125 C 203.710938 22.367188 205.21875 20.71875 207.160156 20.628906 C 207.214844 20.628906 207.269531 20.625 207.328125 20.625 C 209.214844 20.625 210.765625 22.101562 210.851562 23.988281 C 210.855469 24.023438 210.859375 24.191406 210.859375 24.46875 C 210.855469 25.980469 210.65625 28.335938 209.738281 30.960938 C 208.828125 33.59375 206.867188 37.230469 202.71875 39.589844 C 199.996094 41.148438 196.6875 41.9375 192.890625 41.9375 L 192.863281 41.9375 C 191.953125 41.9375 190.996094 41.890625 190.023438 41.800781 L 188.734375 44.703125 C 188.578125 45.058594 188.160156 45.21875 187.804688 45.0625 L 179.730469 41.488281 C 179.375 41.328125 179.210938 40.914062 179.371094 40.558594 L 181.949219 34.753906 C 182.105469 34.398438 182.523438 34.238281 182.878906 34.394531 L 187.101562 36.265625 C 187.242188 36.0625 187.402344 35.875 187.578125 35.703125 L 183.167969 33.75 C 182.984375 33.671875 182.792969 33.628906 182.59375 33.628906 C 182.230469 33.628906 181.890625 33.769531 181.632812 34.011719 C 181.714844 31.519531 182.03125 29.136719 182.589844 27.214844 C 183.066406 25.519531 183.75 24.214844 184.503906 23.46875 Z M 184.503906 23.46875 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#000000" d="M 178.414062 16.28125 C 178.539062 16.808594 178.609375 17.347656 178.628906 17.890625 C 178.644531 18.433594 178.609375 18.972656 178.519531 19.511719 C 178.429688 20.046875 178.289062 20.570312 178.097656 21.078125 C 177.90625 21.589844 177.667969 22.074219 177.378906 22.535156 C 177.089844 22.996094 176.761719 23.425781 176.386719 23.824219 C 176.015625 24.21875 175.609375 24.578125 175.164062 24.894531 C 174.722656 25.210938 174.253906 25.480469 173.757812 25.707031 C 173.257812 25.929688 172.746094 26.101562 172.214844 26.226562 C 171.683594 26.351562 171.148438 26.421875 170.601562 26.4375 C 170.058594 26.457031 169.515625 26.421875 168.980469 26.332031 C 168.441406 26.242188 167.917969 26.101562 167.410156 25.910156 C 166.898438 25.71875 166.414062 25.480469 165.949219 25.191406 C 165.488281 24.90625 165.058594 24.574219 164.660156 24.203125 C 164.261719 23.832031 163.90625 23.425781 163.585938 22.980469 C 163.269531 22.539062 163 22.070312 162.773438 21.574219 C 162.550781 21.082031 162.375 20.566406 162.253906 20.039062 C 162.128906 19.507812 162.058594 18.972656 162.039062 18.429688 C 162.023438 17.882812 162.058594 17.34375 162.148438 16.808594 C 162.234375 16.269531 162.375 15.75 162.570312 15.238281 C 162.761719 14.730469 163 14.246094 163.289062 13.785156 C 163.578125 13.320312 163.90625 12.890625 164.277344 12.496094 C 164.652344 12.097656 165.058594 11.742188 165.503906 11.425781 C 165.945312 11.109375 166.414062 10.835938 166.910156 10.613281 C 167.40625 10.390625 167.921875 10.214844 168.453125 10.09375 C 168.984375 9.96875 169.519531 9.898438 170.066406 9.878906 C 170.609375 9.863281 171.148438 9.898438 171.6875 9.988281 C 172.226562 10.074219 172.75 10.214844 173.257812 10.40625 C 173.769531 10.597656 174.253906 10.839844 174.71875 11.125 C 175.179688 11.414062 175.609375 11.742188 176.007812 12.113281 C 176.40625 12.488281 176.761719 12.894531 177.078125 13.335938 C 177.398438 13.777344 177.667969 14.246094 177.894531 14.742188 C 178.117188 15.238281 178.292969 15.75 178.414062 16.28125 Z M 178.414062 16.28125 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 187.203125 37.96875 C 187.042969 39.519531 188.171875 40.90625 189.722656 41.066406 C 190.820312 41.175781 191.867188 41.234375 192.863281 41.234375 C 192.871094 41.234375 192.882812 41.234375 192.890625 41.234375 C 196.738281 41.234375 199.898438 40.390625 202.371094 38.976562 C 206.113281 36.847656 208.097656 33.542969 209.074219 30.730469 C 210.0625 27.894531 210.152344 25.457031 210.15625 24.464844 C 210.15625 24.214844 210.148438 24.0625 210.148438 24.019531 C 210.074219 22.464844 208.75 21.261719 207.191406 21.335938 C 205.636719 21.40625 204.433594 22.722656 204.5 24.273438 C 204.5 24.285156 204.503906 24.351562 204.503906 24.464844 C 204.519531 25.242188 204.339844 28.300781 202.851562 30.800781 C 202.109375 32.0625 201.09375 33.203125 199.566406 34.078125 C 198.035156 34.949219 195.929688 35.585938 192.863281 35.589844 C 192.074219 35.589844 191.222656 35.546875 190.308594 35.453125 C 188.753906 35.292969 187.363281 36.417969 187.203125 37.96875 Z M 187.203125 37.96875 " fill-opacity="1" fill-rule="nonzero"/></svg>'
    },
];

const HowItWorks = () => {
    const [isHovered, setIsHovered] = React.useState(Array(cardsData.length).fill(false));

    const handleMouseEnter = (index) => {
        const updatedHoverState = isHovered.map((item, idx) => idx === index ? true : false);
        setIsHovered(updatedHoverState);
    };

    const handleMouseLeave = () => {
        setIsHovered(Array(cardsData.length).fill(false));
    };

    return (
        <div className="how-it-works-container">
            {cardsData.map((card, index) => (
                <div className="card-wrapper" key={index}>
                    <div className={`how-it-works-card ${isHovered[index] ? 'focus' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="circle-number">{index + 1}</div>
                        <div className="svg-container" dangerouslySetInnerHTML={{ __html: card.svg }} />
                        <div className={`card-content ${isHovered[index] ? 'push-up' : ''}`}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                        {isHovered[index] && (
                            <div className="additional-info">
                                {card.additionalInfo}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
    
};


export default HowItWorks;