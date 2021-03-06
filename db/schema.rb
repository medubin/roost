# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170414041327) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_homes_on_name", using: :btree
  end

  create_table "housemates", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.integer  "home_id",                    null: false
    t.boolean  "admin",      default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["home_id"], name: "index_housemates_on_home_id", using: :btree
    t.index ["user_id", "home_id"], name: "index_housemates_on_user_id_and_home_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_housemates_on_user_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "home_id",    null: false
    t.string   "message",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_id"], name: "index_messages_on_home_id", using: :btree
    t.index ["message"], name: "index_messages_on_message", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "default_home_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["default_home_id"], name: "index_users_on_default_home_id", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
