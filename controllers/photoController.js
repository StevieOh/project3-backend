const express = require('express');

const router = express.Router();

const User = require('../models/user');

 router.get('/', async (req, res, next) => {
  console.log(req.session, ' this is get all')
     try  {

      const allUsers = await User.find();

      res.json({
        status: 200,
        data: allUsers
      })

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {
  console.log('')
  try {
    console.log(req.body, ' this is req.body');
    const createdUser = await User.create(req.body);

    res.json({
      status: 200,
      data: createdUser
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundUser = await User.findById(req.params.id);
        res.json({
          status: 200,
          data: foundUser
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedUser
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedUser = await User.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedUser
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;