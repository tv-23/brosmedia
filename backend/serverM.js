import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
<<<<<<< HEAD
import multer from 'multer';

=======

import multer from 'multer';
>>>>>>> d274e2fe77923c326ce7467eb275eed2f3e83cb1
const upload = multer(); // ميموري ستوراج

const app = express();
app.use(cors());

<<<<<<< HEAD
app.post('/send-message', upload.single('file'), async (req, res) => {
  const { email, question,service, } = req.body;
  const file = req.file;

  if (!email) {
    return res.status(400).send('Email is required.');
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tvelqjiri@gmail.com',
        pass: 'gqpg ptjl fdch bggv',
      },
    });

    let textMessage = `Question: ${question} \n Service: ${service}`;
    textMessage += `\n\n---\nEmail client: ${email}`;

    const mailOptions = {
      from: email,
      to: 'tvelqjiri@gmail.com',
      subject: `Nouveau service sélectionné par ${email}`,
      text: textMessage,
    };

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalname,
          content: file.buffer,
        }
      ];
    }

    await transporter.sendMail(mailOptions);
    res.status(200).send('Message envoyé avec succès');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
=======
app.post('/send-message', upload.single('file'), async(req, res) => {
    const { email, message } = req.body;
    const file = req.file;

    if (!email) {
        return res.status(400).send('Email is required.');
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abel10041994@gmail.com',
                pass: 'vrqm yihv txqg pcem',
            },
        });

        let textMessage = message || "Pas de message texte.";
        textMessage += `\n\n---\nEmail client: ${email}`;

        const mailOptions = {
            from: email,
            to: 'abel10041994@gmail.com',
            subject: `Nouveau service sélectionné par ${email}`,
            text: textMessage,
        };

        if (file) {
            mailOptions.attachments = [{
                filename: file.originalname,
                content: file.buffer,
            }];
        }

        await transporter.sendMail(mailOptions);
        res.status(200).send('Message envoyé avec succès');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
>>>>>>> d274e2fe77923c326ce7467eb275eed2f3e83cb1
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server running on port ${PORT}`);
});
=======
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> d274e2fe77923c326ce7467eb275eed2f3e83cb1
