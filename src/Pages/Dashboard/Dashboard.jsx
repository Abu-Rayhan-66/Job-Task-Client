import { useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";


const Dashboard = () => {

    const {user} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const axios = useAxiosPublic()
      
    
      const { data: allTask = [], refetch } = useQuery({
        queryKey: ["alltask", user],
        queryFn: () =>
          axios.get(`/alltask?email=${user?.email}`).then((res) => res.data),
      });
    
      const onSubmit = (data) => {
        const task = {
          title: data.title,
          dedline: data.dedline,
          priority: data.priority,
          descriptions: data.descriptions,
          status: "to-do",
          email: user?.email,
        };
        axios.post("/alltask", task).then(() => {
          refetch();
          toast("Add Task Sucessfully", {
            icon: "👏",
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        });
      };


    const to_do = allTask.filter((task)=>task.status === 'to-do')
  const ongoing = allTask.filter((task)=>task.status === 'ongoing')
  const completed = allTask.filter((task)=>task.status === 'completed')


  const dragStarted = (e, id) => {
    console.log("drag has been started");
    e.dataTransfer.setData("todoId", id);
  };

  const dragingOver = (e) => {
    e.preventDefault()
    console.log('draging over now');
  }

  const dragDroppedTodo = (e,status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId,status);
    axios.put(`/alltask/${tanasperTaskId}`,{status:status})
    .then(res=>{
      console.log(res.data);
      refetch()
    })
  }
 
  const dragDroppedOngoing = (e,status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId,status);
    axios.put(`/alltask/${tanasperTaskId}`,{status:status})
    .then(res=>{
      console.log(res.data);
      refetch()
    })
  }
  const dragDroppedCompleted = (e,status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId,status);
    axios.put(`/alltask/${tanasperTaskId}`,{status:status})
    .then(res=>{
      console.log(res.data);
      refetch()
    })
  }

  const handleDelete = id => {
    axios.delete(`/alltask/${id}`)
    .then(()=>{
      refetch();
      toast("Task Deleted Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    })
  }

    return (
        <div>
            <div className="flex justify-center mt-10 mb-8 gap-4 ">
            <NavLink to="/" className="btn mt-4 bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Home</NavLink>
            <h2 className="text-4xl font-bold mt-4  text-center ">Manage Your Task</h2>
            <img className="h-16 w-16 rounded-full"  src={user.photoURL} alt="" />
            </div>
            <div className="max-w-7xl mx-auto">
            
            <form className="bg-blue-300 p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <br />
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="rounded-md px-2 py-1 w-full"
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="dedline" className="font-medium">
              Dedline
            </label>
            <br />
            <input
              {...register("dedline", { required: true })}
              type="date"
              className="rounded-md px-2 py-1 w-full"
            />
            {errors.dedline && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="priority" className="font-medium">
              Priority
            </label>
            <br />
            <select
              {...register("priority", { required: true })}
              name=""
              id=""
              className=" rounded-md px-2 py-1 w-full"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="descriptions" className="font-medium">
            Descriptions
          </label>
          <br />
          <textarea
            {...register("descriptions", { required: true })}
            className="rounded-md px-2 py-1 w-full"
            name="descriptions"
            id=""
            rows="2"
          ></textarea>
          {errors.descriptions && <span>This field is required</span>}
        </div>
        <input
          type="submit"
          value="Add Task"
          className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div onDragOver={(e)=>dragingOver(e)} onDrop={(e)=>dragDroppedTodo(e,'to-do')} className="bg-green-200 p-3 rounded-md">
          <h1 className="text-2xl font-semibold mb-2">TO-DO</h1>
          {to_do?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-blue-200 mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={()=>handleDelete(task?._id)} className="text-xl text-red-700">X</button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span className="font-medium px-5 text-white bg-blue-700 rounded-2xl">{task?.priority}</span>
            </div>
          ))}
        </div>
        <div onDragOver={(e)=>dragingOver(e)} onDrop={(e)=>dragDroppedOngoing(e,'ongoing')} className="bg-green-200  p-3 rounded-md">
          <h1 className="text-2xl font-semibold uppercase">ongoing</h1>
          {ongoing?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-blue-200  mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={()=>handleDelete(task?._id)} className="text-xl text-red-700">X</button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span className="font-medium px-5 text-white bg-blue-700 rounded-2xl">{task?.priority}</span>
            </div>
          ))}
        </div>
        <div onDragOver={(e)=>dragingOver(e)} onDrop={(e)=>dragDroppedCompleted(e,'completed')} className="bg-green-200 p-3 rounded-md">
          <h1 className="text-2xl font-semibold uppercase">Completed</h1>
          {completed?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-blue-200  mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={()=>handleDelete(task?._id)} className="text-xl text-red-700">X</button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span className="font-medium px-5 text-white bg-blue-700 rounded-2xl">{task?.priority}</span>
            </div>
          ))}
        </div>
      </div>
    
        </div>
        </div>
    );
};

export default Dashboard;