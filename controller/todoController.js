const express = require('express');
const Todo = require('../model/todo_model');

// create a todo
const createTodo = async (req, res) => {
    const { title, body } = req.body;
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json({data: todo})
    } catch (error) {
        console.log(error);
    } 
    }

// get all todos
const getAllTodos = async (req, res) => {
    try {
        const allTodo = await Todo.find()
            res.status(201).json({ success: true, data: allTodo  })
        } catch (error) {
            res.status(404).json({ msg: 'success' })
    }
}

// get a single one
const getSingleTodo = async (req, res) => {
    const { id } = req.params;
   const singleTodo = await Todo.findById(id)
   if (singleTodo){
    res.status(200).json({ msg: 'success', data: singleTodo })
   } 
    res.status(400).json({ msg: 'Todolist does not exist' })
   }
   
// update todo {}
const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const existingTodo = await Todo.findById(id);
        const updateTodo = await Todo.findByIdAndUpdate(existingTodo, req.body, {
            new: true,
            runValidators: true,
            // overwrite: true
        })
        res.status(201).json({ data: updateTodo })
    } catch (error) {
        res.status(500).json({ msg: 'TODO not found' })
    }
}


// delete todo
const delTodo = async (req, res) => {
    const { id } = req.params;
    // const deltodo = await Todo.findByIdAndDelete(id)
    try {
        const deltodo = await Todo.findByIdAndDelete(id)
        return res.status(200).json({msg: 'deleted successfully'})
    } catch (error) {
        res.status(404).json({ msg: "user does not exist" })
    }
}


module.exports = { createTodo, getAllTodos, getSingleTodo, delTodo, updateTodo }


