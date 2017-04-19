class CreateHousemates < ActiveRecord::Migration[5.0]
  def change
    create_table :housemates do |t|
      t.integer :user_id, null: false
      t.integer :home_id, null: false
      t.boolean :admin, null: false, default: false
      t.timestamps
    end
    add_index :housemates, :user_id
    add_index :housemates, :home_id
    add_index :housemates, [:user_id, :home_id], unique: true

  end
end
