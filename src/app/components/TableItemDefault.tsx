export default function TableItemDefault() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index: number) => (
        <tr
          className={`cursor-pointer ${index % 2 ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-100 hover:scale-105 duration-200`}
          key={index}
        >
          {[1, 2, 3, 4].map((index: number) => (
            <td className="py-3 px-6" style={{ height: '48px' }} key={index}></td>
          ))}
        </tr>
      ))}
    </>
  );
}
