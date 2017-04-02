class Home < ApplicationRecord
  validates :name, presence: true

  has_many :housemates

  has_many :users,
  through: :housemates

  has_many :default_users,
  class_name: "User",
  foreign_key: :default_home_id,
  primary_key: :id



end
