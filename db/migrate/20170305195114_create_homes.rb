class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.string :name, null: false
      t.string :address
      t.timestamps
    end
    
    add_index :homes, :name
  end
end
