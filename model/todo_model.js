const mongoose = require('mongoose');
const express = require('express');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true} )

module.exports = mongoose.model('Todo', todoSchema)